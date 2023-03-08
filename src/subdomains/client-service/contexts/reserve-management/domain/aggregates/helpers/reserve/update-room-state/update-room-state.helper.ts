import { RoomStateUpdatedEventPublisher } from "../../../../events";
import { IUpdateRoomState } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const UpdateRoomState = async (
    data: IUpdateRoomState,
    reserveService: IReserveDomainService,
    roomStateUpdatedEventPublisher: RoomStateUpdatedEventPublisher
): Promise<boolean | null> => {
    const result = await reserveService.updateRoomState(data);
    roomStateUpdatedEventPublisher.response = result;
    roomStateUpdatedEventPublisher.publish();
    return result;
}
