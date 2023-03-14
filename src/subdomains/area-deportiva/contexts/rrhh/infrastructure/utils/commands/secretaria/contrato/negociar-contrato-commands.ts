import { IBuscarContratoCommands } from "src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria";
import { IsString } from 'class-validator';

export class Negociarcontrato implements IBuscarContratoCommands {
    
    @IsString()
    contratoId: string;

}