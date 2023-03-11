import { AggregateRootException } from "src/libs/sofka";
import {
    CheckInDomainEntity,
    GuestDomainEntity,
    RoomKeyDomainEntity
} from "../entities";
import {
    CheckInCreatedEventPublisher,
    GuestAddedEventPublisher,
    GuestEmailUpdatedEventPublisher,
    GuestPhoneUpdatedEventPublisher,
    RoomKeyAccessLevelUpdatedEventPublisher,
    RoomKeyAddedEventPublisher,
    AccessLevelUpdatedEventPublisher,
    EmailUpdatedEventPublisher,
    PhoneUpdatedEventPublisher
} from "../events";
import {
    ICreateCheckIn,
    IAddGuest,
    IAddRoomKey,
    IUpdateGuestEmail,
    IUpdateGuestPhone,
    IUpdateRoomKeyAccessLevel,
    IUpdateAccessLevel,
    IUpdatePhone,
    IUpdateEmail
} from "../interfaces";
import {
    ICheckInDomainService,
    IGuestDomainService,
    IRoomKeyDomainService
} from "../services";
import { 
    CreateCheckIn,
    AddGuest,
    UdateGuestEmail,
    AddRoomKey,
    UpdateAccessLevel,
    UpdateEmail,
    UpdateGuestPhone,
    UpdatePhone,
    UpdateRoomKeyAccessLevel,
} from "./helpers";

export class CheckInAggregate implements
    ICheckInDomainService,
    IGuestDomainService,
    IRoomKeyDomainService {

    private readonly checkInService?: ICheckInDomainService
    private readonly guestService?: IGuestDomainService
    private readonly roomKeyService?: IRoomKeyDomainService

    private readonly checkInCreatedEventPublisher?: CheckInCreatedEventPublisher;
    private readonly guestAddedEventPublisher?: GuestAddedEventPublisher;
    private readonly guestEmailUpdatedEventPublisher?: GuestEmailUpdatedEventPublisher;
    private readonly guestPhoneUpdatedEventPublisher?: GuestPhoneUpdatedEventPublisher;
    private readonly roomKeyAccessLevelUpdatedEventPublisher?: RoomKeyAccessLevelUpdatedEventPublisher;
    private readonly roomKeyAddedEventPublisher?: RoomKeyAddedEventPublisher;
    private readonly accessLevelUpdatedEventPublisher?: AccessLevelUpdatedEventPublisher;
    private readonly emailUpdatedEventPublisher?: EmailUpdatedEventPublisher;
    private readonly phoneUpdatedEventPublisher?: PhoneUpdatedEventPublisher;

    constructor(
        {
            checkInService,
            guestService,
            roomKeyService,

            checkInCreatedEventPublisher,
            guestAddedEventPublisher,
            guestEmailUpdatedEventPublisher,
            guestPhoneUpdatedEventPublisher,
            roomKeyAccessLevelUpdatedEventPublisher,
            roomKeyAddedEventPublisher,
            phoneUpdatedEventPublisher,
            emailUpdatedEventPublisher,
            accessLevelUpdatedEventPublisher,
        }: {
            checkInService?: ICheckInDomainService,
            guestService?: IGuestDomainService,
            roomKeyService?: IRoomKeyDomainService,

            checkInCreatedEventPublisher?: CheckInCreatedEventPublisher,
            guestAddedEventPublisher?: GuestAddedEventPublisher,
            guestEmailUpdatedEventPublisher?: GuestEmailUpdatedEventPublisher,
            guestPhoneUpdatedEventPublisher?: GuestPhoneUpdatedEventPublisher,
            roomKeyAccessLevelUpdatedEventPublisher?: RoomKeyAccessLevelUpdatedEventPublisher,
            roomKeyAddedEventPublisher?: RoomKeyAddedEventPublisher,
            accessLevelUpdatedEventPublisher?: AccessLevelUpdatedEventPublisher,
            emailUpdatedEventPublisher?: EmailUpdatedEventPublisher,
            phoneUpdatedEventPublisher?: PhoneUpdatedEventPublisher,
        }
    ) {
        this.checkInService = checkInService
        this.guestService = guestService
        this.roomKeyService = roomKeyService

        this.checkInCreatedEventPublisher = checkInCreatedEventPublisher
        this.guestAddedEventPublisher = guestAddedEventPublisher
        this.guestEmailUpdatedEventPublisher = guestEmailUpdatedEventPublisher
        this.guestPhoneUpdatedEventPublisher = guestPhoneUpdatedEventPublisher
        this.roomKeyAccessLevelUpdatedEventPublisher = roomKeyAccessLevelUpdatedEventPublisher
        this.roomKeyAddedEventPublisher = roomKeyAddedEventPublisher
        this.emailUpdatedEventPublisher = emailUpdatedEventPublisher
        this.phoneUpdatedEventPublisher = phoneUpdatedEventPublisher
        this.accessLevelUpdatedEventPublisher = accessLevelUpdatedEventPublisher
    }


    async createCheckIn(checkIn: ICreateCheckIn): Promise<CheckInDomainEntity> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.checkInCreatedEventPublisher)
            throw new AggregateRootException('checkInCreatedEventPublisher no esta definido')

        return await CreateCheckIn(checkIn, this.checkInService, this.checkInCreatedEventPublisher)
    }

    async addGuest(guest: IAddGuest): Promise<GuestDomainEntity> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.guestAddedEventPublisher)
            throw new AggregateRootException('guestAddedEventPublisher no esta definido')

        return await AddGuest(guest, this.checkInService, this.guestAddedEventPublisher)
    }

    async addRoomKey(room: IAddRoomKey): Promise<RoomKeyDomainEntity> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.roomKeyAddedEventPublisher)
            throw new AggregateRootException('roomKeyAddedEventPublisher no esta definido')

        return await AddRoomKey(room, this.checkInService, this.roomKeyAddedEventPublisher)
    }

    async udateGuestEmail(data: IUpdateGuestEmail): Promise<string> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.guestEmailUpdatedEventPublisher)
            throw new AggregateRootException('guestEmailUpdatedEventPublisher no esta definido')

        return await UdateGuestEmail(data, this.checkInService, this.guestEmailUpdatedEventPublisher)
    }

    async updateGuestPhone(data: IUpdateGuestPhone): Promise<string> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.guestPhoneUpdatedEventPublisher)
            throw new AggregateRootException('guestPhoneUpdatedEventPublisher no esta definido')

        return await UpdateGuestPhone(data, this.checkInService, this.guestPhoneUpdatedEventPublisher)
    }

    async updateRoomKeyAccessLevel(data: IUpdateRoomKeyAccessLevel): Promise<string> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.roomKeyAccessLevelUpdatedEventPublisher)
            throw new AggregateRootException('roomKeyAccessLevelUpdatedEventPublisher no esta definido')

        return await UpdateRoomKeyAccessLevel(data, this.checkInService, this.roomKeyAccessLevelUpdatedEventPublisher)
    }



    async updatePhone(data: IUpdatePhone): Promise<GuestDomainEntity> {
        if (!this.guestService)
            throw new AggregateRootException('guestService no esta definido')
        if (!this.phoneUpdatedEventPublisher)
            throw new AggregateRootException('phoneUpdatedEventPublisher no esta definido')

        return await UpdatePhone(data, this.guestService, this.phoneUpdatedEventPublisher)
    }

    async updateEmail(data: IUpdateEmail): Promise<GuestDomainEntity> {
        if (!this.guestService)
            throw new AggregateRootException('guestService no esta definido')
        if (!this.emailUpdatedEventPublisher)
            throw new AggregateRootException('emailUpdatedEventPublisher no esta definido')

        return await UpdateEmail(data, this.guestService, this.emailUpdatedEventPublisher)
    }

    async updateAccessLevel(data: IUpdateAccessLevel): Promise<RoomKeyDomainEntity> {
        if (!this.roomKeyService)
            throw new AggregateRootException('roomKeyService no esta definido')
        if (!this.accessLevelUpdatedEventPublisher)
            throw new AggregateRootException('accessLevelUpdatedEventPublisher no esta definido')

        return await UpdateAccessLevel(data, this.roomKeyService, this.accessLevelUpdatedEventPublisher)
    }
}
