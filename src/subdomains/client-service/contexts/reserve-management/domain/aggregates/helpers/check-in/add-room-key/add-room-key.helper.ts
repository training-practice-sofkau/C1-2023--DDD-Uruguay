import { RoomKeyDomainEntity } from "../../../../entities";
import { RoomKeyAddedEventPublisher } from "../../../../events";
import { IAddRoomKey } from "../../../../interfaces";
import { ICheckInDomainService } from "../../../../services";

export const AddRoomKey = async (
    room: IAddRoomKey,
    checkInService: ICheckInDomainService,
    roomKeyAddedEventPublisher: RoomKeyAddedEventPublisher
): Promise<RoomKeyDomainEntity | null> => {
    const result = await checkInService.addRoomKey(room);
    roomKeyAddedEventPublisher.response = result;
    roomKeyAddedEventPublisher.publish();
    return result;
}
