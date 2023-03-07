import { SaleDomainEntity } from "../../../entities/Sale-domain/sale-domain-entity";

export class SalesObtainedResponse {
    succes: boolean;
    data: SaleDomainEntity | null 
}
