import { AddedRivalEventPublisher, AddedStadiumEventPublisher, RegisteredMatchEventPublisher, UpdatedDateEventPublisher, UpdatedRivalTownEventPublisher, UpdatedStadiumCapacityEventPublisher, UpdatedStadiumSquareMetersEventPublisher } from "../../events";
import { IMatchDomainService, IRivalDomainService, IStadiumDomainService } from "../../services";

export interface MatchAggregateHelper {
    readonly matchService?: IMatchDomainService,
    readonly rivalService?: IRivalDomainService,
    readonly stadiumService?: IStadiumDomainService,
    readonly registeredMatchEventPublisher?: RegisteredMatchEventPublisher,
    readonly addedRivalEventPublisher?: AddedRivalEventPublisher,
    readonly addedStadiumEventPublisher?: AddedStadiumEventPublisher,
    readonly updatedStadiumCapacityEventPublisher?: UpdatedStadiumCapacityEventPublisher,
    readonly updatedStadiumSquareMetersEventPublisher?: UpdatedStadiumSquareMetersEventPublisher,
    readonly updatedRivalTownEventPublisher?: UpdatedRivalTownEventPublisher,
    readonly updatedDateEventPublisher?: UpdatedDateEventPublisher,
}