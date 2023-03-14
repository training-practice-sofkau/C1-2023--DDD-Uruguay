import { IBuscarCesionCommands } from "src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria";
import { IsUUID } from 'class-validator';

export class BuscarCesion implements IBuscarCesionCommands {
    @IsUUID()
    cesionId?: string;
    
}