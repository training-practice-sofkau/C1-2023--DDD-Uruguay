import { CounterDomainEntity } from "../../../entities";

export interface ICounterCounterCreatedResponse {
    success: boolean;
    data: CounterDomainEntity | null;
}