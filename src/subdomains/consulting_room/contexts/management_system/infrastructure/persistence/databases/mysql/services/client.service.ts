import { Injectable } from "@nestjs/common";
import { IClientDomainService } from "src/subdomains/consulting_room/contexts/management_system/domain";
import { ClientMySqlEntity } from "../entities/client.entity";
import { ClientRepository } from '../repositories/client.repository';

@Injectable()
export class ClientMySqlService
    implements IClientDomainService<ClientMySqlEntity> {

    constructor(
        private readonly clientRepository: ClientRepository,
    ) { }

    getClient(clientId: string): Promise<ClientMySqlEntity> {
        return this.clientRepository.findById(clientId)
    }
    registerClient(client: ClientMySqlEntity): Promise<ClientMySqlEntity> {
        return this.clientRepository.create(client);
    }
    updateClientName(clientId: string, entity: ClientMySqlEntity): Promise<ClientMySqlEntity> {
        return this.clientRepository.update(clientId, entity)
    }
    updateClientPhone(clientId: string, entity: ClientMySqlEntity): Promise<ClientMySqlEntity> {
        return this.clientRepository.update(clientId, entity)
    }

}