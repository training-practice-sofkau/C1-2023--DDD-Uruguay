import { ValueObjectBase } from 'src/libs/sofka/';

export class MiniBarValueObject extends ValueObjectBase<number>{
    
    constructor(value: number) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
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
}
