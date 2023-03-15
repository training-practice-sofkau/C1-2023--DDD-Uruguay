import { ClienteDomainEntity } from "../entities";
import { ICreateClienteMethod } from "../interfaces";
import { IUpdatePhoneMethod } from "../interfaces/commands/cliente/updatePhone.command";

export interface IClienteService <T extends ClienteDomainEntity =  ClienteDomainEntity>{


    updatePhone(data: IUpdatePhoneMethod ) : Promise<ClienteDomainEntity>  

    createCliente(cliente : ICreateClienteMethod) : Promise <ClienteDomainEntity>;

    obtenerCliente(client : string) : Promise <ClienteDomainEntity>; //SE LE PASA UN ID?

}
