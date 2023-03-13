import { CounterDomainEntity } from "../../../entities";

export interface IGettedProductResponse {
    success: boolean;
    data: CounterDomainEntity | null;
}