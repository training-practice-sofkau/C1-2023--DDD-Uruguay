import { IdValueObject } from '../../../value-objects/id/id.value-object';
import { NombreValueObject } from '../../../value-objects/nombre/nombre.value-object';
import { ITramiteDomainInterface } from '../tramite/tramite.domain-interface';
import { IEmpleadoDomainEntity } from '../empleado/empleado.domain-entity.interface';
export interface IStaffDeportivoDomainEntity {

    staffDeportivoId?: string | IdValueObject;
    nombre?: string | NombreValueObject;
    tramite?: ITramiteDomainInterface;
    empleado?: IEmpleadoDomainEntity;
}
