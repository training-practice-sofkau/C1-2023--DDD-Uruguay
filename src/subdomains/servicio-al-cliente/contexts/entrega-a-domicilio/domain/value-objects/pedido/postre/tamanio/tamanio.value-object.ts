import { EsTamanioValido } from '../../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface';


export class TamanioValueObject extends ValueObjectBase<string> {

    constructor(value: string) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof TamanioValueObject
     */
    validateData(): void {
        this.validarTamanio();
    }

    /**
     *Funsión que valida que un valor sea un tamaño válido
     *
     * @private
     * @memberof TamanioValueObject
     */
    private validarTamanio(): void {
        if(EsTamanioValido(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Tamaño',
                message: 'El valor no es un tamaño válido'
            };

            this.setError(error);
        }
    }
    
}