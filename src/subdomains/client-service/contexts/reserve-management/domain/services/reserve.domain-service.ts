import {
    CustomerDomainEntity,
    ReserveDomainEntity,
    RoomDomainEntity
} from "../entities";
import {
    IAddCustomer,
    IAddRoom,
    ICreateReserve,
    IGetRoom,
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

    updateStartDate(data: IUpdateStartDate): Promise<ReserveDomainEntity>;

    updateEndDate(data: IUpdateEndDate): Promise<ReserveDomainEntity>;

    updateNumberOfGuests(data: IUpdateNumberOfGuests): Promise<ReserveDomainEntity>;

    updateCustomerPaymentMethod(data: IUpdateCustomerPaymentMethod): Promise<string>;

    updateRoomState(data: IUpdateRoomState): Promise<boolean>

    getCustomer(data: string): Promise<CustomerDomainEntity>;

    getRoom(data: string): Promise<RoomDomainEntity>;
}