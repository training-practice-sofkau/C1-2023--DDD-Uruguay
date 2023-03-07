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
import { AggregateRootException } from "src/libs/sofka";
import { 
    IAddCustomer, 
    IAddRoom, 
    ICreateReserve, 
    IUpdateCustomerPaymentMethod, 
    IUpdateEndDate, 
    IUpdateNumberOfGuests, 
    IUpdatePaymentMethod, 
    IUpdateRoomState, 
    IUpdateStartDate, 
    IUpdateState 
} from "../interfaces";
import { 
    CreateReserve, 
    AddRoom,
    AddCustomer, 
    UpdateStartDate,
    UpdateEndDate,
    UpdateNumberOfGuests,
    UpdateCustomerPaymentMethod,
    UpdateRoomState,
    UpdatePaymentMethod,
    UpdateState,
} from "./helpers/";

export class ReserveAggregate implements
    IReserveDomainService,
    ICustomerDomainService,
    IRoomDomainService {

    private readonly reserveService?: IReserveDomainService;
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
            reserveService?: IReserveDomainService,
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

    async createReserve(reserve: ICreateReserve): Promise<ReserveDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.reserveCreatedEventPublisher)
            throw new AggregateRootException('reserveCreatedEventPublisher no esta definido')

        return await CreateReserve(reserve, this.reserveService, this.reserveCreatedEventPublisher)
    }

    async addRoom(room: IAddRoom): Promise<RoomDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.roomAddedEventPublisher)
            throw new AggregateRootException('roomAddedEventPublisher no esta definido')

        return await AddRoom(room, this.reserveService, this.roomAddedEventPublisher)
    }

    async addCustomer(customer: IAddCustomer): Promise<CustomerDomainEntity> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.customerAddedEventPublisher)
            throw new AggregateRootException('customerAddedEventPublisher no esta definido')

        return await AddCustomer(customer, this.reserveService, this.customerAddedEventPublisher)
    }

    async updateStartDate(data: IUpdateStartDate): Promise<Date> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.startDateUpdatedEventPublisher)
            throw new AggregateRootException('startDateUpdatedEventPublisher no esta definido')

        return await UpdateStartDate(data, this.reserveService, this.startDateUpdatedEventPublisher)
    }

    async updateEndDate(data: IUpdateEndDate): Promise<Date> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.endDateUpdatedEventPublisher)
            throw new AggregateRootException('endDateUpdatedEventPublisher no esta definido')

        return await UpdateEndDate(data, this.reserveService, this.endDateUpdatedEventPublisher)
    }

    async updateNumberOfGuests(data: IUpdateNumberOfGuests): Promise<number> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.numberOfGuestsUpdatedEventPublisher)
            throw new AggregateRootException('numberOfGuestsUpdatedEventPublisher no esta definido')

        return await UpdateNumberOfGuests(data, this.reserveService, this.numberOfGuestsUpdatedEventPublisher)
    }

    async updateCustomerPaymentMethod(data: IUpdateCustomerPaymentMethod): Promise<string> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.customerPaymentMethodUpdatedEventPublisher)
            throw new AggregateRootException('customerPaymentMethodUpdatedEventPublisher no esta definido')

        return await UpdateCustomerPaymentMethod(data, this.reserveService, this.customerPaymentMethodUpdatedEventPublisher)
    }

    async updateRoomState(data: IUpdateRoomState): Promise<boolean> {
        if (!this.reserveService)
            throw new AggregateRootException('reserveService no esta definido')
        if (!this.roomStateUpdatedEventPublisher)
            throw new AggregateRootException('roomStateUpdatedEventPublisher no esta definido')

        return await UpdateRoomState(data, this.reserveService, this.roomStateUpdatedEventPublisher)
    }


    async updatePaymentMethod(data: IUpdatePaymentMethod): Promise<string> {
        if (!this.customerService)
            throw new AggregateRootException('customerService no esta definido')
        if (!this.paymentMethodUpdatedEventPublisher)
            throw new AggregateRootException('paymentMethodUpdatedEventPublisher no esta definido')

        return await UpdatePaymentMethod(data, this.customerService, this.paymentMethodUpdatedEventPublisher)
    }

    async updateState(data: IUpdateState): Promise<boolean> {
        if (!this.roomService)
            throw new AggregateRootException('roomService no esta definido')
        if (!this.stateUpdatedEventPublisher)
            throw new AggregateRootException('stateUpdatedEventPublisher no esta definido')

        return await UpdateState(data, this.roomService, this.stateUpdatedEventPublisher)
    }
}
