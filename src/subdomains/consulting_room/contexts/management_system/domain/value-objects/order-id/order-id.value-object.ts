import { ValueObjectBase } from '@sofka';
import { IsUUID } from '@validations';

import { v4 as uuid } from 'uuid';


export class OrderIdValueObject extends ValueObjectBase<string>{
    constructor(value?: string) {
        super(value ? value : uuid());
    }

    validateData(): void {
        this.validateStructure();
    }

    private validateStructure(): void {
        if (this.value && IsUUID(this.value) === false) {
            const error = {
                field: 'UsuarioID',
                message: 'El id no contiene una estructura valida UUIDV4'
            }
            this.setError(error)
        }
    }

}