import { ProductDomainEntity } from "../../../entities";

export interface ICounterProductCreatedResponse {
    success: boolean;
    data: ProductDomainEntity | null;
}