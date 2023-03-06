import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity";

export class ClientObtainedResponse {
    succes: boolean;
    data: ClientDomainBase | null 
}
