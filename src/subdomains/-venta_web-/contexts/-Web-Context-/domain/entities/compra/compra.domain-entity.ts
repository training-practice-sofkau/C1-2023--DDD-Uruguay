import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { IClienteDomainEntityInterface, ICursoDomainEntityInterface, ICuponDomainEntityInterface } from "../interfaces";
import { ICompraDomainEntity } from "../interfaces/i-compra.domain-entity.interface";
import { v4 as uuidv4 } from 'uuid';

export class CompraDomainEntity implements ICompraDomainEntity{


    idCompra: string | UuidValueObject;
    clienteCompra: IClienteDomainEntityInterface;
    cursoCompra: ICursoDomainEntityInterface;
    cuponCompra: ICuponDomainEntityInterface;

    constructor( _data? : ICompraDomainEntity){
        
        if(_data.idCompra) this.idCompra = _data.idCompra
        
        else this.idCompra = uuidv4();

        if (_data?.clienteCompra) this.clienteCompra = _data.clienteCompra;

        if (_data?.cursoCompra) this.cursoCompra = _data.cursoCompra;

        if (_data?.cuponCompra) this.cuponCompra = _data.cuponCompra;

    }

}
