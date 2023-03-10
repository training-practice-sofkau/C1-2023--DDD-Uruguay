import { IGetCoachCommand } from '../../../domain/interfaces/commands/team/get-coach.command';
import { IGotCoachResponse } from '../../../domain/interfaces/responses/team/got-coach.response';
import { ValueObjectErrorHandler } from '../../../../../../../libs/sofka/bases/value-object-error-handler.base';
import { AggregateRootException, IUseCase } from 'src/libs';
import { ICoachDomainService } from '../../../domain/services/coach.domain-service';
import { CoachDomainEntity, TeamAggregate } from '../../../domain';
export class GetCoachUseCase<
    Command extends IGetCoachCommand,
    Response extends IGotCoachResponse
>
extends ValueObjectErrorHandler
implements IUseCase<Command, Response>
{
    private readonly teamAggregate: TeamAggregate;

    constructor(
        private readonly coachService: ICoachDomainService,
    ) {
        super();
        this.teamAggregate = new TeamAggregate({coachService})
    }
    async execute(command?: Command): Promise<Response> {
        return {success: true, data: this.executeTeamAggregateRoot(command)} as Response
    }

    executeTeamAggregateRoot(command: Command): CoachDomainEntity {
        let entity: CoachDomainEntity;
        this.teamAggregate.getCoach(command.coachId)
        .then(iEntity => entity = iEntity)
        .catch(() => new AggregateRootException('Coach entity not founded'))

        return entity;
    }
}