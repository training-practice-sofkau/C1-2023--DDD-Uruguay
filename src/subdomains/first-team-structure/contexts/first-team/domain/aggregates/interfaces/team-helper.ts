import { AddedCoachEventPublisher, AddedPlayerEventPublisher, RegisteredTeamEventPublisher, UpdatedCoachWageEventPublisher, UpdatedPlayerPositionEventPublisher, UpdatedPlayerWageEventPublisher } from "../../events";
import { ICoachDomainService, IPlayerDomainService, ITeamDomainService } from "../../services";

export interface TeamAggregateHelper {
    readonly teamService?: ITeamDomainService,
    readonly coachService?: ICoachDomainService,
    readonly playerService?: IPlayerDomainService,
    readonly registeredTeamEventPublisher?: RegisteredTeamEventPublisher,
    readonly addedCoachEventPublisher?: AddedCoachEventPublisher,
    readonly addedPlayerEventPublisher?: AddedPlayerEventPublisher,
    readonly updatedCoachWageEventPublisher?: UpdatedCoachWageEventPublisher,
    readonly updatedPlayerWageEventPublisher?: UpdatedPlayerWageEventPublisher,
    readonly updatedPlayerPositionEventPublisher?: UpdatedPlayerPositionEventPublisher,
}