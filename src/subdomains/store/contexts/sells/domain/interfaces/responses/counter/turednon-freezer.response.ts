import { CounterDomainEntity } from "../../../entities";

export interface ICounterTurnedOnResponse {
    success: boolean;
    data: CounterDomainEntity | null;
}