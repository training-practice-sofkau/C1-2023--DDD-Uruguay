import { RoomKeyDomainEntity } from "../../../../entities";
import { RoomKeyObtainedEventPublisher } from "../../../../events";
import { ICheckInDomainService } from "../../../../services";

export const GetRoomKey = async (
    data: string,
    checkInService: ICheckInDomainService,
    roomKeyObtainedEventPublisher: RoomKeyObtainedEventPublisher
): Promise<RoomKeyDomainEntity | null> => {
    const result = await checkInService.getRoomKey(data);
    roomKeyObtainedEventPublisher.response = result;
    roomKeyObtainedEventPublisher.publish();
    return result;
}
