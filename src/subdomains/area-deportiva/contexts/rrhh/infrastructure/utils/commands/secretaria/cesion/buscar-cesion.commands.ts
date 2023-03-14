import { IBuscarCesionCommands } from "src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria";
import { IsString } from 'class-validator';

export class BuscarCesion implements IBuscarCesionCommands {
    @IsString()
    cesionId?: string;
    
}