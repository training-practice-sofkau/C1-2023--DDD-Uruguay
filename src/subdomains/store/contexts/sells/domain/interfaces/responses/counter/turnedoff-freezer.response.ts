import { CounterDomainEntity } from "../../../entities";

export interface ICounterTurnedOffResponse {
    success: boolean;
    data: CounterDomainEntity | null;
}