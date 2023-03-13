import { IGotPlayersResponse, IPlayerDomainService, PlayerDomainEntity, TeamAggregate } from '../../../domain';
import { IGetPlayersCommand } from '../../../domain/interfaces/commands/team/get-players.command';
import { IUseCase } from '../../../../../../../libs/sofka/interface/use-case.interface';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException } from 'src/libs';
export class GetPlayersUseCase<
    Command extends IGetPlayersCommand,
    Response extends IGotPlayersResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly playerService: IPlayerDomainService,
    ) {
        super();
        this.teamAggregate = new TeamAggregate({playerService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTeamAggregateRoot(command)} as Response
    }

    executeTeamAggregateRoot(command: Command): PlayerDomainEntity[] {
        let entitys: PlayerDomainEntity[];
        this.teamAggregate.getPlayers(command.playersId)
        .then(iEntitys => entitys = iEntitys)
        .catch(() => new AggregateRootException('Players entitys not founded'))

        return entitys;
    }
}