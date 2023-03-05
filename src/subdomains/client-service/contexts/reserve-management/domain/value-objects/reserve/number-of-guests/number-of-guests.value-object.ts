import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidNumber } from 'src/libs/validations';

export class NumberOfGuestsValueObject extends ValueObjectBase<number>{

    constructor(value?: number) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsNumber();
        this.validateMaxCapacity();
    }

    /**
     *Validamos que el objeto no sea null, este vacio o sea un valor menor a 1
     *
     * @private
     * @memberof NumberOfGuestsValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined || this.value < 1) {
            const error = {
                field: 'NumberOfGuests',
                message: 'No se proporciono ningun huesped'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos que el numero de huespedes no sobrepase la capacidad del hotel
     *
     * @private
     * @memberof NumberOfGuestsValueObject
     */
    private validateMaxCapacity(): void {
        if (this.value > 50) {
            const error = {
                field: 'NumberOfGuests',
                message: 'El hotel no cuenta con tantas habitaciones disponibles'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo number
     *
     * @private
     * @memberof NumberOfGuestsValueObject
     */
    private validateIsNumber(): void {
        if (this.value && IsValidNumber(this.value) === false) {
            const error = {
                field: 'NumberOfGuests',
                message: `${this.value} , no es un dato tipo number`
            };
            this.setError(error);
        }
    }
}
