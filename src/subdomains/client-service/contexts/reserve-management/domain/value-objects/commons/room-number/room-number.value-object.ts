import { ValueObjectBase } from 'src/libs/sofka/';

export class RoomNumberValueObject extends ValueObjectBase<number>{

    constructor(value: number) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
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
}
