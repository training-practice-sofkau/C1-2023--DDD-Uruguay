import { IdValueObject } from "../../../value-objects";
import { TipoNegociacionValueObject } from '../../../value-objects/tipo-negociacion/tipo-negociacion.value-object';
import { TerminosACumplirValueObject } from '../../../value-objects/terminos-a-cumplir/terminos-a-cumplir.value-object';
import { StateValueObject } from '../../../value-objects/state/state.value-object';

export interface INegociacionDomainEntityInterface {

    negociacionId?: string | IdValueObject;
    equipoSalidaId?: string | IdValueObject;
    equipoNuevoId?: string | IdValueObject;
    tipoNegociacion?: string | TipoNegociacionValueObject;
    terminoACumplir?: string | TerminosACumplirValueObject;
    state?: boolean | StateValueObject;
    
}
