import { IsUUID } from "class-validator";
import { ICreateMembershipMethod } from "../../../../domain/interfaces/commands/membership";


export class ICreateMembershipCommand implements ICreateMembershipMethod{

    @IsUUID()
    idMembership? : string;

    @IsUUID()
    idCliente? : string;

    @IsUUID()
    idPlan? : string;
                        

}