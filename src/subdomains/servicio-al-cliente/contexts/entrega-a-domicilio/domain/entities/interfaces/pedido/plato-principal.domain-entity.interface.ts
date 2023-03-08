import { PlatoPrincipalIdValueObject, NombreValueObject, GuarnicionValueObject } from '../../../value-objects/pedido/plato-principal';

/**
 *Interfaz para la entidad Plato principal
 *
 * @export
 * @class IPlatoPrincipalDomainEntity
 */
 export interface IPlatoPrincipalDomainEntity {
    platoPrincipalId?: string | PlatoPrincipalIdValueObject;
    nombre?: string | NombreValueObject;
    guarnicion?: string | GuarnicionValueObject;
    createdAt?: number | Date;
}