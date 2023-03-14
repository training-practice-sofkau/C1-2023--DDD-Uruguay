import { IBuscarContratoCommands } from "src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria";
import {  IsUUID} from 'class-validator';

export class Buscarcontrato implements IBuscarContratoCommands {
    
    @IsUUID()
    contratoId: string;

}