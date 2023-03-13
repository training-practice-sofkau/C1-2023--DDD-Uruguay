import { ProductDomainEntity } from "../../../../entities";

export interface IProductUpdatedExpirationResponse {
    success: boolean;
    data: ProductDomainEntity | null;
}