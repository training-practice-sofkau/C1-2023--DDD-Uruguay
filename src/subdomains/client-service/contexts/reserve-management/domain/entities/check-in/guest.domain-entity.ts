import { v4 as uuidv4 } from 'uuid';
import { IGuestDomainEntity } from "../interfaces";
import { 
    IdValueObject, 
    FullNameValueObject, 
    DocumentValueObject, 
    PhoneValueObject, 
    EmailValueObject 
} from "../../value-objects";


export class GuestDomainEntity implements IGuestDomainEntity{
    guestId: string | IdValueObject;
    fullName: string | FullNameValueObject;
    document: number | DocumentValueObject;
    phone: string | PhoneValueObject;
    email: string | EmailValueObject;

    constructor(_data?: IGuestDomainEntity) {
        if(_data?.guestId) this.guestId = _data.guestId;
        else this.guestId = uuidv4();

        if(_data?.fullName) this.fullName = _data.fullName;

        if(_data?.document) this.document = _data.document;

        if(_data?.phone) this.phone = _data.phone;

        if(_data?.email) this.email = _data.email;
    }
}
