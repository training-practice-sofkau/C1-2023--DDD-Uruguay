import { ValueObjectBase } from 'src/libs/sofka/bases/';

export class DateValueObject extends ValueObjectBase<Date> {

    constructor(value?: Date) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof DateValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Date',
                message: 'No se proporciono una fecha'
            };
            this.setError(error);
        }
    }
}
