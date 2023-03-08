import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidNumber } from 'src/libs/validations';

export class MiniBarValueObject extends ValueObjectBase<number>{

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
     * @memberof MiniBarValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'MiniBar',
                message: 'No se proporciono un valor'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos que el valor no sea negativo
     *
     * @private
     * @memberof MiniBarValueObject
     */
    private validatePositive(): void {
        if (this.value < 0) {
            const error = {
                field: 'MiniBar',
                message: 'No se puede ingresar un costo negativo'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo number
     *
     * @private
     * @memberof MiniBarValueObject
     */
    private validateIsNumber(): void {
        if (this.value && IsValidNumber(this.value) === false) {
            const error = {
                field: 'MiniBar',
                message: `${this.value} , no es un dato tipo number`
            };
            this.setError(error);
        }
    }
}
