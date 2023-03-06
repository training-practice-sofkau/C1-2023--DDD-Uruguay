import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity";

export class ClientAddResponse {
    succes: boolean;
    data: ClientDomainBase | null 
}
