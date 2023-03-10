import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { IStadiumDomainService, IUpdatedStadiumSquareMetersResponse, IUpdateStadiumSquareMeters, MatchAggregate, SquareMetersValueObject, StadiumDomainEntity, UpdatedStadiumSquareMetersEventPublisher } from "../../../domain";

export class UpdateStadiumSquareMetersUseCases<
Command extends IUpdateStadiumSquareMeters,
Response extends IUpdatedStadiumSquareMetersResponse
> 
extends ValueObjectErrorHandler
implements IUseCase<Command, Response> {
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly stadiumService: IStadiumDomainService,
        private readonly updatedStadiumSquareMetersEventPublisher: UpdatedStadiumSquareMetersEventPublisher,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({stadiumService, updatedStadiumSquareMetersEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeMatchAggregateRoot({stadiumId: command.stadiumId, squareMeters: ValueObject} as Command)
    }

    createValueObject(command: Command): SquareMetersValueObject {
        if(command.squareMeters instanceof SquareMetersValueObject) return command.squareMeters
        return new SquareMetersValueObject(command.squareMeters);
    }

    validateValueObject(valueObject: SquareMetersValueObject) {

        if(valueObject instanceof SquareMetersValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateSquareMetersUseCase got some errors',
            this.getErrors(),
        );
    }

    executeMatchAggregateRoot(update: Command): Promise<StadiumDomainEntity | null> {
        return this.matchAggregate.updateStadiumSquareMeters(update);
    }
}
