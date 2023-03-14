import { IsBoolean, IsString ,IsNumber, IsUUID} from 'class-validator';
import { INegociarContratoCommands } from '../../../../../../../../../../dist/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/secretaria/negociar-contrato.commands.interface';

export class Negociarcontrato implements INegociarContratoCommands {
    @IsUUID()
    empleadoId?: string;
    
    @IsUUID()
    contratoId: string;

    @IsNumber()
    costo?: number;

    @IsBoolean()
    state?: boolean;
   
    @IsString()
    fechaFinalizacion?: string;
    

}