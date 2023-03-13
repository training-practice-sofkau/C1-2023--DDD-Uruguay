import { Injectable } from "@nestjs/common";
import { IRoomDomainService } from "../../../../../domain";
import { RoomMySqlEntity } from "../entities";
import { RoomRepository } from '../repositories';

@Injectable()
export class RoomMySqlService
    implements IRoomDomainService<RoomMySqlEntity> {

    constructor(
        private readonly roomRepository: RoomRepository,
    ) { }

    updateState(entity: RoomMySqlEntity): Promise<RoomMySqlEntity> {
        return this.roomRepository.update(entity.roomId, entity);
    }

}