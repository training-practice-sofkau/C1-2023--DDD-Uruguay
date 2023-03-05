import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidPhone } from 'src/libs/validations/';

export class PhoneValueObject extends ValueObjectBase<string>{

    constructor(value: string) {
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
     * @memberof PhoneValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Phone',
                message: 'No se proporciono un Telefono'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si el telefono corresponde a una de las siguentes estructuras
     * 9 digitos, ej: 091929394
     * 11 digitos iniciando con un simbolo de +, ej: +59891929394
     *
     * @private
     * @memberof PhoneValueObject
     */
    private validateStructure(): void {
        if(this.value && IsValidPhone(this.value) === false) {
            const error = {
                field: 'Phone',
                message: `${this.value} , no es un telefono valido`
            };
            this.setError(error);
        }
    }
}
