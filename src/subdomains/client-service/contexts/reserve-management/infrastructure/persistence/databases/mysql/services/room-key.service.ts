import { Injectable } from "@nestjs/common";
import { IRoomKeyDomainService } from "../../../../../domain";
import { RoomKeyMySqlEntity } from "../entities";
import { RoomKeyRepository } from '../repositories';

@Injectable()
export class RoomKeyMySqlService
    implements IRoomKeyDomainService<RoomKeyMySqlEntity> {

    constructor(
        private readonly roomKeyRepository: RoomKeyRepository,
    ) { }

    updateAccessLevel(entity: RoomKeyMySqlEntity): Promise<RoomKeyMySqlEntity> {
        return this.roomKeyRepository.update(entity.roomKeyId, entity);
    }

}