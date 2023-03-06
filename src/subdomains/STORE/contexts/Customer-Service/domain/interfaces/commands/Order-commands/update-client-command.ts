import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity"

export class UpdateClient {
    ClientID: string
    ClientData: Partial<ClientDomainBase>

}
