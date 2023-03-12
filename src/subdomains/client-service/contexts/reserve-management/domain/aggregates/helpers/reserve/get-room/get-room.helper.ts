import { RoomDomainEntity } from "../../../../entities";
import { RoomObtainedEventPublisher } from "../../../../events";
import { IGetRoom } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const GetRoom = async (
    data: IGetRoom,
    reserveService: IReserveDomainService,
    roomObtainedEventPublisher: RoomObtainedEventPublisher
): Promise<RoomDomainEntity | null> => {
    const result = await reserveService.getRoom(data);
    roomObtainedEventPublisher.response = result;
    roomObtainedEventPublisher.publish();
    return result;
}
