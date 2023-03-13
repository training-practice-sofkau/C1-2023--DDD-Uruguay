import { CounterDomainEntity } from "../../../entities";

export interface IGettedPosterResponse {
    success: boolean;
    data: CounterDomainEntity | null;
}