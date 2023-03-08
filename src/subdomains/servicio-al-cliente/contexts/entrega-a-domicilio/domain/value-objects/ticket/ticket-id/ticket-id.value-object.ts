import { v4 as uuid } from 'uuid';

import { EsUuid } from '../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface';


export class TicketIdValueObject extends ValueObjectBase<string> {

    constructor(value?: string) {
        super(value ? value : uuid());
    }

    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof TicketIdValueObject
     */
    validateData(): void {
        this.validateStructure();
    }

    /**
     *Funsión que valida la estructura de un uuid v4
     *
     * @private
     * @memberof TicketIdValueObject
     */
    private validateStructure(): void {
        if(this.value && EsUuid(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'TicketId',
                message: 'El id no tiene una estructura válida UUIDV4'
            };

            this.setError(error);
        }
    }
    
}