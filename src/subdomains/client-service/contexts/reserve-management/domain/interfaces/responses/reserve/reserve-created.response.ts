import { ReserveDomainEntity } from "../../../entities";

export interface IReserveCreatedResponse {
    success: boolean;
    data: ReserveDomainEntity | null;
}