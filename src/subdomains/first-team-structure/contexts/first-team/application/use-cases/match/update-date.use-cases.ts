import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { DateValueObject, IMatchDomainService, IUpdateDateCommand, MatchAggregate, UpdatedDateEventPublisher } from "../../../domain";
import { IUpdatedDateResponse } from '../../../domain/interfaces/responses/match/date-updated.response';
import { MatchDomainEntity } from '../../../domain/entities/match.domain-entity';

export class UpdateDateUseCases<
    Command extends IUpdateDateCommand,
    Response extends IUpdatedDateResponse
> 
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly matchService: IMatchDomainService,
        private readonly updatedDateEventPublisher: UpdatedDateEventPublisher,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({matchService, updatedDateEventPublisher})
    }
    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return {success: data ? true : false, data} as Response
    }

    executeCommand(command: Command) {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);

        return this.executeMatchAggregateRoot({matchId: command.matchId, date: ValueObject} as Command)
    }

    createValueObject(command: Command): DateValueObject {
        if(command.date instanceof DateValueObject) return command.date;
        return new DateValueObject(command.date);
    }

    validateValueObject(valueObject: DateValueObject) {

        if(valueObject instanceof DateValueObject && valueObject.hasErrors()) this.setErrors(valueObject.getErrors());

        if(this.hasErrors() === true) throw new ValueObjectException(
            'UpdateDateUseCase got some errors',
            this.getErrors(),
        );
    }

    executeMatchAggregateRoot(update: Command): Promise<MatchDomainEntity | null> {
        return this.matchAggregate.updateDate(update);
    }
}
