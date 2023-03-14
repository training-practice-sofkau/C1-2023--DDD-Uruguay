import { IBuscarContratoCommands } from "src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria";
import { IsString } from 'class-validator';

export class Buscarcontrato implements IBuscarContratoCommands {
    
    @IsString()
    contratoId: string;

}