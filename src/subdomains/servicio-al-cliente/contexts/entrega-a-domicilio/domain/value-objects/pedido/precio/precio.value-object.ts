import { EsPrecioValido } from '../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface';


export class PrecioValueObject extends ValueObjectBase<number> {

    constructor(value: number) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof PrecioValueObject
     */
    validateData(): void {
        this.validarPrecio();
    }


    /**
     *Funsión que valida que un valor sea un precio válido
     *
     * @private
     * @memberof PrecioValueObject
     */
    private validarPrecio(): void {
        if( EsPrecioValido(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Precio',
                message: 'El valor no es un precio válido'
            };

            this.setError(error);
        }
    }
    
}