import { Injectable } from "@nestjs/common";
import { ICheckInDomainService } from "../../../../../domain";
import { CheckInMySqlEntity, GuestMySqlEntity, RoomKeyMySqlEntity } from "../entities/";
import { CheckInRepository, GuestRepository, RoomKeyRepository } from '../repositories/';

@Injectable()
export class CheckInMySqlService
    implements ICheckInDomainService<CheckInMySqlEntity> {

    constructor(
        private readonly checkInRepository: CheckInRepository,
        private readonly guestRepository: GuestRepository,
        private readonly roomKeyRepository: RoomKeyRepository,
    ) { }


    createCheckIn(checkIn: CheckInMySqlEntity): Promise<CheckInMySqlEntity> {
        return this.checkInRepository.create(checkIn);
    }

    addGuest(guest: GuestMySqlEntity): Promise<GuestMySqlEntity> {
        return this.guestRepository.create(guest);
    }

    addRoomKey(roomKey: RoomKeyMySqlEntity): Promise<RoomKeyMySqlEntity> {
        return this.roomKeyRepository.create(roomKey);
    }
    
    getGuest(data: string): Promise<GuestMySqlEntity> {
        return this.guestRepository.findById(data);
    }
    
    getRoomKey(data: string): Promise<RoomKeyMySqlEntity> {
        return this.roomKeyRepository.findById(data);
    }
}