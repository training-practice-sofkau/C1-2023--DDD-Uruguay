import { ClientDomainEntitybase } from '../entities';

export interface IClientDomainService<
    T extends ClientDomainEntitybase = ClientDomainEntitybase,
> {
    getClient(clientId: string): Promise<T | null>;
    registerClient(client: T): Promise<T | null>;
    updateClientName(clientId: string, entity: T): Promise<T>;
    updateClientPhone(clientId: string, entity: T): Promise<T>;
}