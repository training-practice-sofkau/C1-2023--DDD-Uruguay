import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { AddedStadiumEventPublisher, CapacityValueObject, IAddedStadiumResponse, IAddStadiumCommand, IMatchDomainService, IStadiumDomainEntity, MatchAggregate, NameValueObject, SquareMetersValueObject, StadiumDomainEntity, TownValueObject } from "../../../domain";

export class AddStadiumUseCases<
Command extends IAddStadiumCommand = IAddStadiumCommand,
Response extends IAddedStadiumResponse = IAddedStadiumResponse
> extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly matchService: IMatchDomainService,
        private readonly addedStadiumEventPublisher: AddedStadiumEventPublisher,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({matchService, addedStadiumEventPublisher})
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command): Promise<StadiumDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        const entity = this.createEntityStadiumDomain(ValueObject);

        return this.executeMatchAggregateRoot(entity)
    }
    
    createValueObject(command: Command): IStadiumDomainEntity {
        const capacity = new CapacityValueObject(command.capacity);
        const squareMeters = new SquareMetersValueObject(command.squareMeters);
        const name = new NameValueObject(command.name);
        const town = new TownValueObject(command.town);

        return {capacity, squareMeters,name, town}
    }
    
    validateValueObject(valueObject: IStadiumDomainEntity): void {
        const {
            capacity,
            squareMeters,
            name,
            town
        } = valueObject;

        if(capacity instanceof CapacityValueObject && capacity.hasErrors()) this.setErrors(capacity.getErrors());

        if(squareMeters instanceof SquareMetersValueObject && squareMeters.hasErrors()) this.setErrors(squareMeters.getErrors());
        
        if(name instanceof NameValueObject && name.hasErrors()) this.setErrors(name.getErrors());

        if(town instanceof TownValueObject && town.hasErrors()) this.setErrors(town.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'AddStadiumUseCase got some errors',
            this.getErrors(),
        );
    }

    createEntityStadiumDomain(valueObject: IStadiumDomainEntity): StadiumDomainEntity {
        const {
            capacity,
            squareMeters,
            name,
            town
        } = valueObject

        return new StadiumDomainEntity({
            capacity: capacity.valueOf(),
            squareMeters: squareMeters.valueOf(),
            name: name.valueOf(),
            town: town.valueOf()
        })
    }

    executeMatchAggregateRoot(entity: StadiumDomainEntity): Promise<StadiumDomainEntity | null> {
        return this.matchAggregate.addStadium(entity);
    }
}
