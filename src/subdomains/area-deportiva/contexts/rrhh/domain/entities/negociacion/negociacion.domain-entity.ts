import { v4 as uuidv4 } from 'uuid';


import { IdValueObject, TerminosACumplirValueObject } from '../../value-objects';
import { TipoNegociacionValueObject } from '../../value-objects/tipo-negociacion/tipo-negociacion.value-object';
import { INegociacionDomainEntityInterface } from '../interfaces/negociacion/negociacion.domain-entity.interface';
import { StateValueObject } from '../../value-objects/state/state.value-object';

export class NegociacionDomainEntity implements INegociacionDomainEntityInterface {
   
    
    negociacionId?: string | IdValueObject;
    equipoSalidaId?: string | IdValueObject;
    equipoEntradaId?: string | IdValueObject;
    tipoNegociacion?: string | TipoNegociacionValueObject;
    terminoACumplir?: string | TerminosACumplirValueObject;
    state?: boolean | StateValueObject;
    
    constructor(_negociacion?: INegociacionDomainEntityInterface) {

        if (_negociacion.negociacionId)
            this.negociacionId = _negociacion.negociacionId;
        else
            this.negociacionId = uuidv4();

        if (_negociacion.equipoSalidaId)
            this.equipoSalidaId = _negociacion.equipoSalidaId;

        if (_negociacion.equipoNuevoId)
            this.equipoEntradaId = _negociacion.equipoNuevoId;

        if (_negociacion.tipoNegociacion)
            this.tipoNegociacion = _negociacion.tipoNegociacion;
            
        if (_negociacion.terminoACumplir)
            this.terminoACumplir = _negociacion.terminoACumplir;

        if (_negociacion.state)
            this.state = _negociacion.state;
    }
}
