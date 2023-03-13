import { ClienteDomainEntity } from "../entities";
import { IUpdatePhoneMethod } from "../interfaces/commands/compra/cliente/updatePhone.command";

export interface IClienteService {

    updatePhone(data: IUpdatePhoneMethod ) : Promise<ClienteDomainEntity > 

}
