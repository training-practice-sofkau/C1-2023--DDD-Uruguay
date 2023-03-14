import { IsBoolean, IsString } from 'class-validator';
import { IModificarStateTraspasoCommands } from 'src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/traspaso';

export class ModificarStateContrato implements IModificarStateTraspasoCommands {

    @IsString()
    id: string;
    
    @IsBoolean()
    state: boolean;
   
}