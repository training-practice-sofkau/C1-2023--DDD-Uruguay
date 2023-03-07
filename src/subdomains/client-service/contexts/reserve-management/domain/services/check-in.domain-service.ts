import { GuestDomainEntity, RoomDomainEntity } from "../entities"

export interface ICheckInDomainService<CheckInDomainEntity> {

    createCheckIn(checkIn: CheckInDomainEntity): Promise<CheckInDomainEntity>

    addGuest(guest: GuestDomainEntity): Promise<GuestDomainEntity>

    addRoom(room: RoomDomainEntity): Promise<RoomDomainEntity>

    udateGuestEmail(checkInId: string, guestId: string, newEmail: string): Promise<string>

    updateGuestPhone(checkInId: string, guestId: string, newPhone: string): Promise<string>
    
    updateRoomKeyAccessLevel(checkInId: string, roomId: string, newRoomKeyAccessLevel: string): Promise<string>
}