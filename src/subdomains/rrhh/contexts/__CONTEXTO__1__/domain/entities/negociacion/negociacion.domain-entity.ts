import { IdValueObject } from '../../value-objects/id/id.value-object';
export class NegociacionDomainEntity {

    equipoSalida: string | IdValueObject;
    equipoEntrada: string | IdValueObject;
    tipoNegociacion: string ; //falta el value object 

}
