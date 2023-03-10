import { IGetStadiumCommand, IGotStadiumResponse, IStadiumDomainService, MatchAggregate, StadiumDomainEntity } from "../../../domain";
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from "src/libs";

export class GetStadiumUseCase<
    Command extends IGetStadiumCommand,
    Response extends IGotStadiumResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly matchAggregate: MatchAggregate;

    constructor(
        private readonly stadiumService: IStadiumDomainService,
    ) {
        super();
        this.matchAggregate = new MatchAggregate({stadiumService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeMatchAggregateRoot(command)} as Response
    }

    executeMatchAggregateRoot(command: Command): StadiumDomainEntity {
        let entity: StadiumDomainEntity;
        this.matchAggregate.getStadium(command.stadiumId)
        .then(iEntity => entity = iEntity)
        .catch(() => new AggregateRootException('Stadium entity not founded'))

        return entity;
    }
}