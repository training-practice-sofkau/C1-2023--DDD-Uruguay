import { EventPublisherBase } from "src/libs";
import { TeamDomainEntity } from '../../../entities/team.domain-entity';

export abstract class RegisteredTeamEventPublisher extends EventPublisherBase<TeamDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.registered-team',
            JSON.stringify({ data: this.response })
        )
    }
}