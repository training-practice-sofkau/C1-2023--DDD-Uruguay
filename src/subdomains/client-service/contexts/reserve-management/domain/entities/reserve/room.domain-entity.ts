import { v4 as uuidv4 } from 'uuid';
import { IRoomDomainEntity } from "../interfaces";
import { 
    IdValueObject, 
    LocationValueObject, 
    AccommodationValueObject, 
    TypeValueObject, 
    StateValueObject, 
    RoomNumberValueObject 
} from "../../value-objects";


export class RoomDomainEntity implements IRoomDomainEntity{

    roomId: string | IdValueObject;
    location: string | LocationValueObject;
    accommodation: string | AccommodationValueObject;
    type: string | TypeValueObject;
    state: boolean | StateValueObject;
    roomNumber: number | RoomNumberValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: IRoomDomainEntity) {
        if(_data?.roomId) this.roomId = _data.roomId;
        else this.roomId = uuidv4();

        if(_data?.location) this.location = _data.location;

        if(_data?.accommodation) this.accommodation = _data.accommodation;

        if(_data?.type) this.type = _data.type;

        if(_data?.state) this.state = _data.state;

        if(_data?.roomNumber) this.roomNumber = _data.roomNumber;

        this.createdAt = new Date();
    }
}
