import { ProductDomainEntity } from "../../../../entities";

export interface IProductUpdatedPriceResponse {
    success: boolean;
    data: ProductDomainEntity | null;
}