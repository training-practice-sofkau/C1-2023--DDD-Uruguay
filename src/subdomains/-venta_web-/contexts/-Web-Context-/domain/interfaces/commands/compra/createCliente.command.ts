import { ClienteDomainEntity } from "../../../entities/common-entities/cliente.domain-entity";

export interface ICreateClienteMethod {

    idCliente: string;
    nombreCliente: string 
    phoneCliente: string;
    emailCliente: string;

    //newCliente : ClienteDomainEntity;

                     
}