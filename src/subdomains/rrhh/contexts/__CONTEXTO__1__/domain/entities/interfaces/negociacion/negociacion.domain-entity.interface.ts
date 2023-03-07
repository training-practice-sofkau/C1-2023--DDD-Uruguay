import { IdValueObject } from "../../../value-objects";
import { TipoNegociacionValueObject } from '../../../value-objects/tipo-negociacion/tipo-negociacion.value-object';
import { TerminosACumplirValueObject } from '../../../value-objects/terminos-a-cumplir/terminos-a-cumplir.value-object';

export interface INegociacionDomainEntityInterface {

    negociacionId?: string | IdValueObject;
    equipoSalidaId?: string | IdValueObject;
    equipoEntradaId?: string | IdValueObject;
    tipoNegociacion: string | TipoNegociacionValueObject;
    terminoACumplir?: string | TerminosACumplirValueObject;
    state?: boolean;
    
}
