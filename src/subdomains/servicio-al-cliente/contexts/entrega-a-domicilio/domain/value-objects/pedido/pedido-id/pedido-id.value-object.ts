import { v4 as uuid } from 'uuid';

import { EsUuid } from '../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface';


export class PedidoIdValueObject extends ValueObjectBase<string> {

    constructor(value?: string) {
        super(value ? value : uuid());
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof PedidoIdValueObject
     */
    validateData(): void {
        this.validateStructure();
    }

    /**
     *Funsión que valida la estructura de un uuid v4
     *
     * @private
     * @memberof PedidoIdValueObject
     */
    private validateStructure(): void {
        if(this.value && EsUuid(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'OrdenId',
                message: 'El id no tiene una estructura válida UUIDV4'
            };

            this.setError(error);
        }
    }
    
}