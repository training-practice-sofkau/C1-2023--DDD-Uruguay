import { ProductDomainEntity } from "../../../../entities";

export interface IProductUpdatedTypeResponse {
    success: boolean;
    data: ProductDomainEntity | null;
}