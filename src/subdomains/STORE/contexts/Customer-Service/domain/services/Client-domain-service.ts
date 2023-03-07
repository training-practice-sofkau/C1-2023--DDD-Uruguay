import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
export interface ClientDomainService  < T extends ClientDomainBase = ClientDomainBase >  {

    UpdateClientName(idclient: number,name: string):   Promise<T>;
    UpdateClientPhone(idclient: number,state: number): Promise<T>;
}
