import { RoomRepository } from './../repositories/room.repository';
import { Injectable } from "@nestjs/common";
import { IReserveDomainService } from "../../../../../domain";
import { CustomerMySqlEntity, ReserveMySqlEntity, RoomMySqlEntity } from "../entities";
import { CustomerRepository, ReserveRepository } from '../repositories';

@Injectable()
export class ReserveMySqlService
    implements IReserveDomainService<ReserveMySqlEntity> {

    constructor(
        private readonly reserveRepository: ReserveRepository,
        private readonly roomRepository: RoomRepository,
        private readonly customerRepository: CustomerRepository,
    ) { }


    createReserve(reserve: ReserveMySqlEntity): Promise<ReserveMySqlEntity> {
        return this.reserveRepository.create(reserve);
    }

    addRoom(entity: RoomMySqlEntity): Promise<RoomMySqlEntity> {
        return this.roomRepository.create(entity);
    }

    addCustomer(entity: CustomerMySqlEntity): Promise<CustomerMySqlEntity> {
        return this.customerRepository.create(entity);
    }

    updateStartDate(entity: ReserveMySqlEntity): Promise<ReserveMySqlEntity> {
        return this.reserveRepository.update(entity.reserveId, entity)
    }

    updateEndDate(entity: ReserveMySqlEntity): Promise<ReserveMySqlEntity> {
        return this.reserveRepository.update(entity.reserveId, entity)
    }

    updateNumberOfGuests(entity: ReserveMySqlEntity): Promise<ReserveMySqlEntity> {
        return this.reserveRepository.update(entity.reserveId, entity)
    }

    getCustomer(data: string): Promise<CustomerMySqlEntity> {
        return this.customerRepository.findById(data);
    }

    getRoom(data: string): Promise<RoomMySqlEntity> {
        return this.roomRepository.findById(data);
    }

}