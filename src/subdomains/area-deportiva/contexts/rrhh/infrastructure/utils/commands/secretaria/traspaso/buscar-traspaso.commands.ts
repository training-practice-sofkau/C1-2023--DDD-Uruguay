
import { IBuscarTraspasoCommands } from "src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria";
import {  IsUUID } from 'class-validator';

export class BuscarcontratoCommand implements IBuscarTraspasoCommands {
    
    @IsUUID()
    traspasoId: string;
    
}