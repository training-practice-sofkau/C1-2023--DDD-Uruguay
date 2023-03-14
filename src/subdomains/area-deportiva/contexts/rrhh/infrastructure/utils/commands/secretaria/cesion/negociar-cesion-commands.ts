import { IsBoolean, IsString ,IsNumber, IsUUID} from 'class-validator';

import { INegociarCesionCommands } from '../../../../../../../../../../dist/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria/negociar-cesion.commands.interface';

export class NegociarCesion implements INegociarCesionCommands {

    @IsUUID()
    cesionId?: string;

     @IsUUID()
    empleadoId: string;

     @IsUUID()
    equipoNuevoId?: string;

    @IsString()
    fechaSalida?: string;

    @IsNumber()
    costo?: number;

    @IsBoolean()
    state?: boolean;
    
    
    

}