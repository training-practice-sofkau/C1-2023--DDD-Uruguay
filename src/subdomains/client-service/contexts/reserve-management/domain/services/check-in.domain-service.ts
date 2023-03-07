import { GuestDomainEntity, RoomDomainEntity } from "../entities"
import {
    IAddGuest,
    IAddRoom,
    ICreateCheckIn,
    IUpdateGuestEmail,
    IUpdateGuestPhone,
    IUpdateRoomKeyAccessLevel
} from "../interfaces";


export interface ICheckInDomainService<CheckInDomainEntity> {

    createCheckIn(checkIn: ICreateCheckIn): Promise<CheckInDomainEntity>

    addGuest(guest: IAddGuest): Promise<GuestDomainEntity>

    addRoom(room: IAddRoom): Promise<RoomDomainEntity>

    udateGuestEmail(data: IUpdateGuestEmail): Promise<string>

    updateGuestPhone(data: IUpdateGuestPhone): Promise<string>

    updateRoomKeyAccessLevel(data: IUpdateRoomKeyAccessLevel): Promise<string>
}