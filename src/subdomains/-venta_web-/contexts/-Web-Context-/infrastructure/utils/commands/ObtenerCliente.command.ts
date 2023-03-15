import { IsUUID } from "class-validator";
import { IObtenerClienteMethod } from "../../../domain/interfaces/commands";


export class IObtenerClienteCommand implements IObtenerClienteMethod{

    @IsUUID()
    idCliente?: string;
    
                  
}

