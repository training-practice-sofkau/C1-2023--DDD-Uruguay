import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidString, IsValidType } from 'src/libs/validations';

export class TypeValueObject extends ValueObjectBase<string>{

    constructor(value: string) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsString();
        this.validateStructure();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof TypeValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Type',
                message: 'No se proporciono una tipo de habitacion valida'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si el tipo de habitacion corresponde a los indicados
     * Simple o Doble
     *
     * @private
     * @memberof TypeValueObject
     */
    private validateStructure(): void {
        if (this.value && IsValidType(this.value) === false) {
            const error = {
                field: 'Type',
                message: `${this.value} , no es un tipo de habitacion valido`
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo string
     *
     * @private
     * @memberof TypeValueObject
     */
    private validateIsString(): void {
        if (this.value && IsValidString(this.value) === false) {
            const error = {
                field: 'Type',
                message: `${this.value} , no es un dato tipo string`
            };
            this.setError(error);
        }
    }
}
