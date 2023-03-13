import { CheckInDomainEntity, GuestDomainEntity, RoomKeyDomainEntity } from "../entities"
import {
    IAddGuest,
    IAddRoomKey,
} from "../interfaces";


export interface ICheckInDomainService<T extends CheckInDomainEntity = CheckInDomainEntity> {

    createCheckIn(checkIn: T): Promise<T>

    addGuest(guest: IAddGuest): Promise<GuestDomainEntity>

    addRoomKey(room: IAddRoomKey): Promise<RoomKeyDomainEntity>
    
    getGuest(data: string): Promise<GuestDomainEntity>;

    getRoomKey(data: string): Promise<RoomKeyDomainEntity>;
}