import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
export interface ClientDomainService  < T extends ClientDomainBase = ClientDomainBase >  {

    UpdateClientName(name: string):   Promise<T>;
    UpdateClientPhone(state: number): Promise<T>;
}
