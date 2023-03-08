import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { IClienteDomainEntityInterface, IPlanDomainEntityInterface } from "../interfaces";
import { IMembershipDomainEntity } from "../interfaces/i-membership.domain-entity.interface";
import { v4 as uuidv4 } from 'uuid';

export class MembershipDomainEntity implements IMembershipDomainEntity{

    idMembership: string | UuidValueObject;
    clienteMembership: IClienteDomainEntityInterface;
    planMembership: IPlanDomainEntityInterface;

    
    constructor( _data? : IMembershipDomainEntity ){
        
        if(_data.idMembership) this.idMembership = _data.idMembership
        
        else this.idMembership = uuidv4();

        if (_data?.clienteMembership) this.clienteMembership = _data.clienteMembership;

        if (_data?.planMembership) this.planMembership = _data.planMembership;

    }
}
