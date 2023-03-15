import { v4 as uuidv4 } from 'uuid';
import {
    IdValueObject,
    RoomNumberValueObject,
    AccessLevelValueObject
} from "../../value-objects";
import { IRoomKeyDomainEntity } from "../interfaces";

export class RoomKeyDomainEntity implements IRoomKeyDomainEntity {

    roomKeyId: string | IdValueObject;
    roomNumber: number | RoomNumberValueObject;
    accessLevel: string | AccessLevelValueObject;

    constructor(_data?: IRoomKeyDomainEntity) {
        if (_data?.roomKeyId) this.roomKeyId = _data.roomKeyId;
        else this.roomKeyId = uuidv4();

        if (_data?.roomNumber) this.roomNumber = _data.roomNumber;

        if (_data?.accessLevel) this.accessLevel = _data.accessLevel;
    }
}
