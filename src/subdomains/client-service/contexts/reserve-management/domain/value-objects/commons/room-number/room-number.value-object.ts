import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidNumber } from 'src/libs/validations';

export class RoomNumberValueObject extends ValueObjectBase<number>{

    constructor(value: number) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsNumber();
        this.validateExist();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof RoomNumberValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'RoomNumber',
                message: 'No se proporciono un numero de habitacion'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos que el valor dado corresponda a una habitacion valida
     * entre 1 y 10
     *
     * @private
     * @memberof RoomNumberValueObject
     */
    private validateExist(): void {
        if (this.value < 1) {
            const error = {
                field: 'RoomNumber',
                message: 'Se proporciono un numero bajo'
            };
            this.setError(error);
        }
        if (this.value > 10) {
            const error = {
                field: 'RoomNumber',
                message: 'Se proporciono un numero muy alto'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo number
     *
     * @private
     * @memberof RoomNumberValueObject
     */
    private validateIsNumber(): void {
        if (this.value && IsValidNumber(this.value) === false) {
            const error = {
                field: 'RoomNumber',
                message: `${this.value} , no es un dato tipo number`
            };
            this.setError(error);
        }
    }
}
