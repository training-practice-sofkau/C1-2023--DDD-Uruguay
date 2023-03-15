import { Injectable } from "@nestjs/common";
import { IGuestDomainService } from "../../../../../domain";
import { GuestMySqlEntity } from "../entities";
import { GuestRepository } from '../repositories';

@Injectable()
export class GuestMySqlService
    implements IGuestDomainService<GuestMySqlEntity> {

    constructor(
        private readonly guestRepository: GuestRepository,
    ) { }

    updatePhone(entity: GuestMySqlEntity): Promise<GuestMySqlEntity> {
        return this.guestRepository.update(entity.guestId, entity);
    }
    
    updateEmail(entity: GuestMySqlEntity): Promise<GuestMySqlEntity> {
        return this.guestRepository.update(entity.guestId, entity);
    }

}