import { CustomerDomainEntity, ReserveDomainEntity, RoomDomainEntity } from "../entities";
import { ICustomerDomainService, IReserveDomainService, IRoomDomainService } from "../services/";
import {
    PaymentMethodUpdatedEventPublisher,
    StateUpdatedEventPublisher,
    StartDateUpdatedEventPublisher,
    RoomStateUpdatedEventPublisher,
    RoomAddedEventPublisher,
    ReserveCreatedEventPublisher,
    NumberOfGuestsUpdatedEventPublisher,
    EndDateUpdatedEventPublisher,
    CustomerPaymentMethodUpdatedEventPublisher,
    CustomerAddedEventPublisher
} from "../events";

export class ReserveAggregate implements
    IReserveDomainService<ReserveDomainEntity>,
    ICustomerDomainService,
    IRoomDomainService {

    private readonly reserveService?: IReserveDomainService<ReserveDomainEntity>;
    private readonly customerService?: ICustomerDomainService;
    private readonly roomService?: IRoomDomainService;

    private readonly customerAddedEventPublisher?: CustomerAddedEventPublisher;
    private readonly customerPaymentMethodUpdatedEventPublisher?: CustomerPaymentMethodUpdatedEventPublisher;
    private readonly endDateUpdatedEventPublisher?: EndDateUpdatedEventPublisher;
    private readonly numberOfGuestsUpdatedEventPublisher?: NumberOfGuestsUpdatedEventPublisher;
    private readonly reserveCreatedEventPublisher?: ReserveCreatedEventPublisher;
    private readonly roomAddedEventPublisher?: RoomAddedEventPublisher;
    private readonly roomStateUpdatedEventPublisher?: RoomStateUpdatedEventPublisher;
    private readonly startDateUpdatedEventPublisher?: StartDateUpdatedEventPublisher;
    private readonly paymentMethodUpdatedEventPublisher?: PaymentMethodUpdatedEventPublisher;
    private readonly stateUpdatedEventPublisher?: StateUpdatedEventPublisher;

    constructor(
        {
            reserveService,
            customerService,
            roomService,

            customerAddedEventPublisher,
            customerPaymentMethodUpdatedEventPublisher,
            endDateUpdatedEventPublisher,
            numberOfGuestsUpdatedEventPublisher,
            reserveCreatedEventPublisher,
            roomAddedEventPublisher,
            roomStateUpdatedEventPublisher,
            startDateUpdatedEventPublisher,
            paymentMethodUpdatedEventPublisher,
            stateUpdatedEventPublisher,
        }: {
            reserveService?: IReserveDomainService<ReserveDomainEntity>,
            customerService?: ICustomerDomainService,
            roomService?: IRoomDomainService,

            customerAddedEventPublisher?: CustomerAddedEventPublisher,
            customerPaymentMethodUpdatedEventPublisher?: CustomerPaymentMethodUpdatedEventPublisher;
            endDateUpdatedEventPublisher?: EndDateUpdatedEventPublisher;
            numberOfGuestsUpdatedEventPublisher?: NumberOfGuestsUpdatedEventPublisher;
            reserveCreatedEventPublisher?: ReserveCreatedEventPublisher;
            roomAddedEventPublisher?: RoomAddedEventPublisher;
            roomStateUpdatedEventPublisher?: RoomStateUpdatedEventPublisher;
            startDateUpdatedEventPublisher?: StartDateUpdatedEventPublisher;
            paymentMethodUpdatedEventPublisher?: PaymentMethodUpdatedEventPublisher;
            stateUpdatedEventPublisher?: StateUpdatedEventPublisher;
        }
    ) {
        this.reserveService = reserveService
        this.customerService = customerService
        this.roomService = roomService

        this.customerAddedEventPublisher = customerAddedEventPublisher
        this.customerPaymentMethodUpdatedEventPublisher = customerPaymentMethodUpdatedEventPublisher
        this.endDateUpdatedEventPublisher = endDateUpdatedEventPublisher
        this.numberOfGuestsUpdatedEventPublisher = numberOfGuestsUpdatedEventPublisher
        this.reserveCreatedEventPublisher = reserveCreatedEventPublisher
        this.roomAddedEventPublisher = roomAddedEventPublisher
        this.roomStateUpdatedEventPublisher = roomStateUpdatedEventPublisher
        this.startDateUpdatedEventPublisher = startDateUpdatedEventPublisher
        this.paymentMethodUpdatedEventPublisher = paymentMethodUpdatedEventPublisher
        this.stateUpdatedEventPublisher = stateUpdatedEventPublisher
    }

    createReserve(reserve: ReserveDomainEntity): Promise<ReserveDomainEntity> {
        throw new Error("Method not implemented.");
    }
    addRoom(room: RoomDomainEntity): Promise<RoomDomainEntity> {
        throw new Error("Method not implemented.");
    }
    addCustomer(customer: CustomerDomainEntity): Promise<CustomerDomainEntity> {
        throw new Error("Method not implemented.");
    }
    updateStartDate(reserveId: string, newDate: Date): Promise<Date> {
        throw new Error("Method not implemented.");
    }
    updateEndDate(reserveId: string, newDate: Date): Promise<Date> {
        throw new Error("Method not implemented.");
    }
    updateNumberOfGuests(reserveId: string, newNumberOfGuests: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    updateCustomerPaymentMethod(reserveId: string, customerId: string, newPaymentMethod: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateRoomState(reserveId: string, roomId: string, newState: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }


    updatePaymentMethod(customerId: string, newPaymentMethod: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateState(roomId: string, newState: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
