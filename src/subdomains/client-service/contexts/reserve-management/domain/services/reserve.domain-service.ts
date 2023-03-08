import { CustomerDomainEntity, ReserveDomainEntity, RoomDomainEntity } from "../entities";
import {
    IAddCustomer,
    IAddRoom,
    ICreateReserve,
    IUpdateCustomerPaymentMethod,
    IUpdateEndDate,
    IUpdateNumberOfGuests,
    IUpdateRoomState,
    IUpdateStartDate
} from "../interfaces";

export interface IReserveDomainService {

    createReserve(reserve: ICreateReserve): Promise<ReserveDomainEntity>;

    addRoom(room: IAddRoom): Promise<RoomDomainEntity>;

    addCustomer(customer: IAddCustomer): Promise<CustomerDomainEntity>;

    updateStartDate(data: IUpdateStartDate): Promise<Date>;

    updateEndDate(data: IUpdateEndDate): Promise<Date>;

    updateNumberOfGuests(data: IUpdateNumberOfGuests): Promise<number>;

    updateCustomerPaymentMethod(data: IUpdateCustomerPaymentMethod): Promise<string>;

    updateRoomState(data: IUpdateRoomState): Promise<boolean>
}