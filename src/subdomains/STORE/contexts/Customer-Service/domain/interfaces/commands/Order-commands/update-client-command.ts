import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity"

export interface UpdateClient {
    ClientID: string
    ClientData: Partial<ClientDomainBase>

}
