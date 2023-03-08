import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidEmail, IsValidString } from 'src/libs/validations/';

export class EmailValueObject extends ValueObjectBase<string>{

    constructor(value: string) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsString();
        this.validateLength();
        this.validateStructure();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof EmailValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Email',
                message: 'No se proporciono un Email'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos la longitud del objeto
     *
     * @private
     * @memberof EmailValueObject
     */
    private validateLength(): void {
        if (this.value.length > 150) {
            const error = {
                field: 'Email',
                message: 'Se proporciono un Email muy largo'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos la estructura del email
     *
     * @private
     * @memberof EmailValueObject
     */
    private validateStructure(): void {
        if (this.value && IsValidEmail(this.value) === false) {
            const error = {
                field: 'Email',
                message: `El Email: ${this.value} , no es valido`
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo string
     *
     * @private
     * @memberof EmailValueObject
     */
    private validateIsString(): void {
        if (this.value && IsValidString(this.value) === false) {
            const error = {
                field: 'Email',
                message: `${this.value} , no es un dato tipo string`
            };
            this.setError(error);
        }
    }
}
