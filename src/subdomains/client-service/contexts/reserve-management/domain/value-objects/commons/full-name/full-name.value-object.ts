import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidFullName, IsValidString } from 'src/libs/validations/';
export class FullNameValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsString();
        this.validateLength();
        this.validateStructure()
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof FullNameValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'FullName',
                message: 'No se proporciono un Nombre Completo'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos la longitud del objeto
     *
     * @private
     * @memberof FullNameValueObject
     */
    private validateLength(): void {
        if (this.value.length > 150) {
            const error = {
                field: 'FullName',
                message: 'Se proporciono un Nombre muy largo'
            };
            this.setError(error);
        }
        if (this.value.length < 10) {
            const error = {
                field: 'FullName',
                message: 'Se proporciono un Nombre muy corto'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos la estructura del Nombre completo
     *esta estructura corresponde a que:
     * la primer letra de cada palabra debe estar en mayuscula
     * cada palabra debe contener solamante una mayuscula y al menos una minuscula
     * unicamenete letras
     *
     * @private
     * @memberof FullNameValueObject
     */
    private validateStructure(): void {
        if (this.value && IsValidFullName(this.value) === false) {
            const error = {
                field: 'FullName',
                message: `El nombre: ${this.value} , no es valido`
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo string
     *
     * @private
     * @memberof FullNameValueObject
     */
    private validateIsString(): void {
        if (this.value && IsValidString(this.value) === false) {
            const error = {
                field: 'FullName',
                message: `${this.value} , no es un dato tipo string`
            };
            this.setError(error);
        }
    }
}
