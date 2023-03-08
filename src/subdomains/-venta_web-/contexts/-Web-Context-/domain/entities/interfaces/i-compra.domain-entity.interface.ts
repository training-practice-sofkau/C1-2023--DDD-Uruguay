import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { IClienteDomainEntityInterface } from "./i-cliente.domain-entity.interface";
import { ICuponDomainEntityInterface } from "./i-cupon.domain-entity.interface";
import { ICursoDomainEntityInterface } from "./i-curso.domain-entity.interface";

export interface ICompraDomainEntity {

    idCompra : string | UuidValueObject;
    clienteCompra :  IClienteDomainEntityInterface;
    cursoCompra : ICursoDomainEntityInterface;
    cuponCompra : ICuponDomainEntityInterface;

}
