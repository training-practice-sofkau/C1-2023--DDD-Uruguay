import { CounterDomainEntity } from "../../../entities";

export interface ICounterCreateCounterCommand{
    counter: CounterDomainEntity
}