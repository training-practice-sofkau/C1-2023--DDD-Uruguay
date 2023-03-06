import { ClientDomainBase } from "../../../../entities/Order-domain/client-domain-entity";

export class UpradedNameResponse {
    succes: boolean;
    data: ClientDomainBase | null 
}
