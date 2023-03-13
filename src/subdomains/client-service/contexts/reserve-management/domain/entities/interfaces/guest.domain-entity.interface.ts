import { 
    DocumentValueObject, 
    EmailValueObject, 
    FullNameValueObject, 
    IdValueObject, 
    PhoneValueObject 
} from "../../value-objects";

export interface IGuestDomainEntity {
    guestId?: string | IdValueObject;
    fullName?: string | FullNameValueObject;
    document?: number | DocumentValueObject;
    phone?: string | PhoneValueObject;
    email?: string | EmailValueObject;
}
