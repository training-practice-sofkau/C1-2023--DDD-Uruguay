import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { IClienteDomainEntityInterface, ICursoDomainEntityInterface, ICuponDomainEntityInterface, ICompraDomainEntityInterface } from "../interfaces";

import { v4 as uuidv4 } from 'uuid';

export class CompraDomainEntity implements ICompraDomainEntityInterface{


    idCompra?: string | UuidValueObject;
    clienteCompra?: IClienteDomainEntityInterface;
    cursoCompra?: ICursoDomainEntityInterface;
    cuponCompra?: ICuponDomainEntityInterface;

    constructor( _data? : ICompraDomainEntityInterface){
        
        if(_data.idCompra) this.idCompra = _data.idCompra
        
        else this.idCompra = uuidv4();

        if (_data?.clienteCompra) this.clienteCompra = _data.clienteCompra;

        if (_data?.cursoCompra) this.cursoCompra = _data.cursoCompra;

        if (_data?.cuponCompra) this.cuponCompra = _data.cuponCompra;

    }

}
