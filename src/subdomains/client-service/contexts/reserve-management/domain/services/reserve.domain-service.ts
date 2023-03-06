import { CustomerDomainEntity, RoomDomainEntity } from "../entities";

export interface IReserveDomainService<ReserveDomainEntity> {
    
    createReserve(reserve: ReserveDomainEntity): Promise<ReserveDomainEntity>;

    addRoom(room: RoomDomainEntity): Promise<RoomDomainEntity>;

    removeRoom(roomId: string, reason?: string): Promise<RoomDomainEntity>;

    addCustomer(customer: CustomerDomainEntity): Promise<CustomerDomainEntity>;

    updateStartDate(reserveId: string, newDate: Date): Promise<Date>;

    updateEndDate(reserveId: string, newDate: Date): Promise<Date>;

    updateNumberOfGuests(reserveId: string, newNumberOgGuests: number): Promise<number>;

    updateCustomerPaymentMethod(reserveId: string, customerId: string, newPaymentMethod: string): Promise<string>;
    
    updateRoomState(reserveId: string, roomId: string, newState: boolean): Promise<boolean>
}