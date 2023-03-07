import { CheckInDomainEntity, GuestDomainEntity, RoomKeyDomainEntity } from "../entities"
import {
    IAddGuest,
    IAddRoomKey,
    ICreateCheckIn,
    IUpdateGuestEmail,
    IUpdateGuestPhone,
    IUpdateRoomKeyAccessLevel
} from "../interfaces";


export interface ICheckInDomainService {

    createCheckIn(checkIn: ICreateCheckIn): Promise<CheckInDomainEntity>

    addGuest(guest: IAddGuest): Promise<GuestDomainEntity>

    addRoomKey(room: IAddRoomKey): Promise<RoomKeyDomainEntity>

    udateGuestEmail(data: IUpdateGuestEmail): Promise<string>

    updateGuestPhone(data: IUpdateGuestPhone): Promise<string>

    updateRoomKeyAccessLevel(data: IUpdateRoomKeyAccessLevel): Promise<string>
}