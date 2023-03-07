import { ProductDomainEntity } from "../../../../entities";

export interface IProductUpdatedStockResponse {
    success: boolean;
    data: ProductDomainEntity | null;
}