import { EventPublisherBase } from "src/libs";
import { TeamDomainEntity } from '../../../entities/team.domain-entity';

export abstract class GotTeamIdEventPublisher extends EventPublisherBase<TeamDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.got-team-id',
            JSON.stringify({ data: this.response })
        )
    }
}