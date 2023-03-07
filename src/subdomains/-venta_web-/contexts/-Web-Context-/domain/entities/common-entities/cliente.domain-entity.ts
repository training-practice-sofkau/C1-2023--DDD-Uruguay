import { EmailValueObject } from "../../value-objects/cliente/email/email.value-object";
import { PhoneValueObject } from "../../value-objects/cliente/phone/phone.value-object";
import { FullnameValueObject } from "../../value-objects/common-value-objects/fullname/fullname.value-object";
import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { IClienteDomainEntityInterface } from "../interfaces/i-cliente.domain-entity.interface";
import { v4 as uuidv4 } from 'uuid';

export class ClienteDomainEntity implements IClienteDomainEntityInterface {

    idCliente: string | UuidValueObject;
    nombreCliente: string | FullnameValueObject;
    phoneCliente: string | PhoneValueObject;
    emailCliente: string | EmailValueObject;


    constructor( _data? : IClienteDomainEntityInterface ){
        
        if(_data.idCliente) this.idCliente = _data.idCliente
        
        else this.idCliente = uuidv4();

        if (_data?.nombreCliente) this.nombreCliente = _data.nombreCliente;

        if (_data?.phoneCliente) this.phoneCliente = _data.phoneCliente;

        if (_data?.emailCliente) this.emailCliente = _data.emailCliente;

        // this.createdAt = new Date();
    }
}


