import { ClienteDomainEntity } from "../../entities/common-entities/cliente.domain-entity";


export interface IClienteConseguidoResponse {

    success: boolean;
    data: ClienteDomainEntity | null;
    
}