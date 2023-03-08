import { RoomDomainEntity } from "../../../../entities";
import { RoomAddedEventPublisher } from "../../../../events";
import { IAddRoom } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const AddRoom = async (
    room: IAddRoom,
    reserveService: IReserveDomainService,
    roomAddedEventPublisher: RoomAddedEventPublisher
): Promise<RoomDomainEntity | null> => {
    const result = await reserveService.addRoom(room);
    roomAddedEventPublisher.response = result;
    roomAddedEventPublisher.publish();
    return result;
}
