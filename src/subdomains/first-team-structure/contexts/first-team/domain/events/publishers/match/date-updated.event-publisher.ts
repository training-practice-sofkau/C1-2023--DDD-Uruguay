import { EventPublisherBase } from "src/libs";
import { MatchDomainEntity } from '../../../entities/match.domain-entity';

export abstract class UpdatedDateEventPublisher extends EventPublisherBase<MatchDomainEntity> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'first-team.updated-date',
            JSON.stringify({ data: this.response })
        )
    }
}