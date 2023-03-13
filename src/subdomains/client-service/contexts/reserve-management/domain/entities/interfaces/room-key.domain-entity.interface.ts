import { 
    AccessLevelValueObject, 
    IdValueObject, 
    RoomNumberValueObject 
} from "../../value-objects";

export interface IRoomKeyDomainEntity {
    roomKeyId?: string | IdValueObject;
    roomNumber?: number | RoomNumberValueObject;
    accessLevel?: string | AccessLevelValueObject;
}
