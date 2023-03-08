import { RoomKeyAccessLevelUpdatedEventPublisher } from "../../../../events";
import { IUpdateRoomKeyAccessLevel } from "../../../../interfaces";
import { ICheckInDomainService } from "../../../../services";

export const UpdateRoomKeyAccessLevel = async (
    data: IUpdateRoomKeyAccessLevel,
    checkInService: ICheckInDomainService,
    roomKeyAccessLevelUpdatedEventPublisher: RoomKeyAccessLevelUpdatedEventPublisher
): Promise<string | null> => {
    const result = await checkInService.updateRoomKeyAccessLevel(data);
    roomKeyAccessLevelUpdatedEventPublisher.response = result;
    roomKeyAccessLevelUpdatedEventPublisher.publish();
    return result;
}
