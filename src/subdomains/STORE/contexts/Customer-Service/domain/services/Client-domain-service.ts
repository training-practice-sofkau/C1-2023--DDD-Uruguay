import { ClientDomainBase } from '../entities/Order-domain/client-domain-entity';
export interface ClientDomainService  < T extends ClientDomainBase = ClientDomainBase >  {

    UpdateClientName(idclient: string,name: string):   Promise<T>;
    UpdateClientPhone(idclient: string,state: number): Promise<T>;
}
