import { IsValidPaymentMethod } from 'src/libs';
import { ValueObjectBase } from 'src/libs/sofka/';

export class PaymentMethodValueObject extends ValueObjectBase<string> {

    constructor (value?: string) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateStructure();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof PaymentMethodValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'PaymentMethod',
                message: 'No se proporciono un Metodo de Pago'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si el metodo de pago corresponde a los indicados
     * Credito o Debito
     *
     * @private
     * @memberof PaymentMethodValueObject
     */
    private validateStructure(): void {
        if(this.value && IsValidPaymentMethod(this.value) === false) {
            const error = {
                field: 'PaymentMethod',
                message: `${this.value} , no es un metodo de pago valido`
            };
            this.setError(error);
        }
    }
}
