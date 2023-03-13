import { IGetRivalCommand, IRivalDomainService, MatchAggregate, RivalDomainEntity } from "../../../domain";
import { IGotRivalResponse } from '../../../domain/interfaces/responses/match/got-rival.response';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from "src/libs";

export class GetRivalUseCases<
    Command extends IGetRivalCommand,
    Response extends IGotRivalResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly rivalService: IRivalDomainService,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({rivalService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeMatchAggregateRoot(command)} as Response
    }

    executeMatchAggregateRoot(command: Command): RivalDomainEntity {
        let entity: RivalDomainEntity;
        this.matchAggregate.getRival(command.rivalId)
        .then(iEntity => entity = iEntity)
        .catch(() => new AggregateRootException('Rival entity not founded'))

        return entity;
    }
    
}