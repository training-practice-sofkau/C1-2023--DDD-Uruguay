import { AggregateRootException } from "src/libs/sofka";
import {
    CheckInDomainEntity,
    GuestDomainEntity,
    RoomKeyDomainEntity
} from "../entities";
import {
    CheckInCreatedEventPublisher,
    GuestAddedEventPublisher,
    RoomKeyAddedEventPublisher,
    AccessLevelUpdatedEventPublisher,
    EmailUpdatedEventPublisher,
    PhoneUpdatedEventPublisher,
    GuestObtainedEventPublisher,
    RoomKeyObtainedEventPublisher
} from "../events";
import {
    IAddGuest,
    IAddRoomKey,
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
    AddRoomKey,
    UpdateAccessLevel,
    UpdateEmail,
    UpdatePhone,
    GetRoomKey,
    GetGuest,
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
    private readonly roomKeyAddedEventPublisher?: RoomKeyAddedEventPublisher;
    private readonly accessLevelUpdatedEventPublisher?: AccessLevelUpdatedEventPublisher;
    private readonly emailUpdatedEventPublisher?: EmailUpdatedEventPublisher;
    private readonly phoneUpdatedEventPublisher?: PhoneUpdatedEventPublisher;
    private readonly guestObtainedEventPublisher?: GuestObtainedEventPublisher;
    private readonly roomKeyObtainedEventPublisher?: RoomKeyObtainedEventPublisher;

    constructor(
        {
            checkInService,
            guestService,
            roomKeyService,

            checkInCreatedEventPublisher,
            guestAddedEventPublisher,
            roomKeyAddedEventPublisher,
            phoneUpdatedEventPublisher,
            emailUpdatedEventPublisher,
            accessLevelUpdatedEventPublisher,
            guestObtainedEventPublisher,
            roomKeyObtainedEventPublisher,
        }: {
            checkInService?: ICheckInDomainService,
            guestService?: IGuestDomainService,
            roomKeyService?: IRoomKeyDomainService,

            checkInCreatedEventPublisher?: CheckInCreatedEventPublisher,
            guestAddedEventPublisher?: GuestAddedEventPublisher,
            roomKeyAddedEventPublisher?: RoomKeyAddedEventPublisher,
            accessLevelUpdatedEventPublisher?: AccessLevelUpdatedEventPublisher,
            emailUpdatedEventPublisher?: EmailUpdatedEventPublisher,
            phoneUpdatedEventPublisher?: PhoneUpdatedEventPublisher,
            guestObtainedEventPublisher?: GuestObtainedEventPublisher,
            roomKeyObtainedEventPublisher?: RoomKeyObtainedEventPublisher,
        }
    ) {
        this.checkInService = checkInService
        this.guestService = guestService
        this.roomKeyService = roomKeyService

        this.checkInCreatedEventPublisher = checkInCreatedEventPublisher
        this.guestAddedEventPublisher = guestAddedEventPublisher
        this.roomKeyAddedEventPublisher = roomKeyAddedEventPublisher
        this.emailUpdatedEventPublisher = emailUpdatedEventPublisher
        this.phoneUpdatedEventPublisher = phoneUpdatedEventPublisher
        this.accessLevelUpdatedEventPublisher = accessLevelUpdatedEventPublisher
        this.guestObtainedEventPublisher = guestObtainedEventPublisher
        this.roomKeyObtainedEventPublisher = roomKeyObtainedEventPublisher
    }


    async createCheckIn(checkIn: CheckInDomainEntity): Promise<CheckInDomainEntity> {
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

    async getGuest(data: string): Promise<GuestDomainEntity> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.guestObtainedEventPublisher)
            throw new AggregateRootException('guestObtainedEventPublisher no esta definido')

        return await GetGuest(data, this.checkInService, this.guestObtainedEventPublisher)
    }

    async getRoomKey(data: string): Promise<RoomKeyDomainEntity> {
        if (!this.checkInService)
            throw new AggregateRootException('checkInService no esta definido')
        if (!this.roomKeyObtainedEventPublisher)
            throw new AggregateRootException('roomKeyObtainedEventPublisher no esta definido')

        return await GetRoomKey(data, this.checkInService, this.roomKeyObtainedEventPublisher)
    }
}
