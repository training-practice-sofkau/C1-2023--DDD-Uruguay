import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidNumber } from 'src/libs/validations';

export class LaundryValueObject extends ValueObjectBase<number>{

    constructor(value: number) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsNumber();
        this.validatePositive();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof LaundryValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Laundry',
                message: 'No se proporciono un valor'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos que el valor no sea negativo
     *
     * @private
     * @memberof LaundryValueObject
     */
    private validatePositive(): void {
        if (this.value < 0) {
            const error = {
                field: 'Laundry',
                message: 'No se puede ingresar un costo negativo'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo number
     *
     * @private
     * @memberof LaundryValueObject
     */
    private validateIsNumber(): void {
        if (this.value && IsValidNumber(this.value) === false) {
            const error = {
                field: 'Laundry',
                message: `${this.value} , no es un dato tipo number`
            };
            this.setError(error);
        }
    }
}
