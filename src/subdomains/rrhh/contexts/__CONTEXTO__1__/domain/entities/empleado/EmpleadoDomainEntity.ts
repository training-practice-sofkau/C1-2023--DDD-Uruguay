import { v4 as uuidv4 } from 'uuid';
import { NombreValueObject, DocumentoValueObject, NacionalidadValueObject, EdadValueObject, SalarioValueObject, IdValueObject } from '../../value-objects';
import { IEmpleadoDomainEntity } from '../interfaces/empleado/empleado.domain-entity.interface';
import { TipoEmpleadoValueObject } from '../../value-objects/tipoEmpleado/tipo-empleado.value-object';

/**
     * Clase empleado que implementa un interface 
     *
     * @class
     * @nombre EmpleadoDomainEntity
*/

export class EmpleadoDomainEntity implements IEmpleadoDomainEntity {

    empleadoId: string | IdValueObject;
    nombre: string | NombreValueObject;
    documento: string | DocumentoValueObject;
    tipoEmpleado?: string | TipoEmpleadoValueObject;
    nacionalidad?: string | NacionalidadValueObject;
    edad?: number | EdadValueObject;
    salario?: number | SalarioValueObject;

    constructor(_empleado?: IEmpleadoDomainEntity) {

        if (_empleado.empleadoId)
            this.empleadoId = _empleado.empleadoId;
        else
            this.empleadoId = uuidv4();

        if (_empleado.nombre)
            this.nombre = _empleado.nombre;

        if (_empleado.documento)
            this.documento = _empleado.documento;

        if (_empleado.tipoEmpleado)
            this.tipoEmpleado = _empleado.tipoEmpleado;

        if (_empleado.nacionalidad)
            this.nacionalidad = _empleado.nacionalidad;

        if (_empleado.edad)
            this.edad = _empleado.edad;

        if (_empleado.salario)
            this.salario = _empleado.salario;


    }
}
