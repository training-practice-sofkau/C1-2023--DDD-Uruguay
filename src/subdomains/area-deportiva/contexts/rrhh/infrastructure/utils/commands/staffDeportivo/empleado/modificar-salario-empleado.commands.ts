import { IsString,IsUUID } from 'class-validator';
import { IModificarSalarioCommands } from 'src/subdomains/area-deportiva/contexts/rrhh/domain/interfaces/commands/empleado';

export class ModificarSalarioEmpleadoCommand implements IModificarSalarioCommands {

    @IsUUID()
    empleadoId: string;

    @IsString()
    salario: string;
}