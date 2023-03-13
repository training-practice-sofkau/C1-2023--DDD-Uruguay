export interface ICreateReserve {
    reserveId?: string;
    startDate?: Date;
    endDate?: Date;
    numberOfGuests: number;
    roomId: string;
    customerId: string;
    createdAt?: number | Date;
}