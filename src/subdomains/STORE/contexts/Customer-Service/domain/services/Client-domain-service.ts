import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
import { UpdateNameClient } from '../interfaces/commands/Order-commands/Client-Command/update-name-command';
import { UpdatePhoneClient } from '../interfaces/commands/Order-commands/Client-Command/update-phone-command';
export interface ClientDomainService  < T extends ClientDomainBase = ClientDomainBase >  {

    UpdateClientName(data: UpdateNameClient):   Promise<T>;
    UpdateClientPhone(data: UpdatePhoneClient): Promise<T>;
}
