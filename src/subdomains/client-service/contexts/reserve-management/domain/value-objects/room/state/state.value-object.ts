import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidBoolean } from 'src/libs/validations';

export class StateValueObject extends ValueObjectBase<boolean>{
    
    constructor(value: boolean) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateStructure();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof StateValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'State',
                message: 'No se proporciono un estado'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos que el valor dado es un booleano
     *
     * @private
     * @memberof StateValueObject
     */
    private validateStructure(): void {
        if(this.value && IsValidBoolean(this.value) === false) {
            const error = {
                field: 'State',
                message: `${this.value} , no es un estado valido valido`
            };
            this.setError(error);
        }
    }
}
