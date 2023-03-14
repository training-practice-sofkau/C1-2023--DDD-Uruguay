import { IsBoolean, IsString } from 'class-validator';
import { IModificarStateCesionCommands } from '../../../../../domain/interfaces/commands/cesion/modificar-state.commands.interface';

export class ModificarStateContrato implements IModificarStateCesionCommands {

    @IsString()
    cesionid: string;
    
    @IsBoolean()
    state: boolean;
   
}