import { IGetTeamCommand, ITeamDomainService, TeamDomainEntity } from "../../../domain";
import { IGotTeamReponse } from '../../../domain/interfaces/responses/team/got-team.response';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from "src/libs";
import { TeamAggregate } from '../../../domain/aggregates/team.aggregate';

export class GetTeamUseCase<
    Command extends IGetTeamCommand,
    Response extends IGotTeamReponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly teamService: ITeamDomainService,
    ) {
        super();
        this.teamAggregate = new TeamAggregate({teamService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTeamAggregateRoot(command)} as Response
    }

    executeTeamAggregateRoot(command: Command): TeamDomainEntity {
        let entity: TeamDomainEntity;
        this.teamAggregate.getTeam(command.teamId)
        .then(iEntity => entity = iEntity)
        .catch(() => new AggregateRootException('Team entity not founded'))

        return entity;
    }
}