import { EsDireccion } from 'src/libs/validations/es-direccion.validations';
import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface';


export class DireccionValueObject extends ValueObjectBase<string> {

    constructor(value: string) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof DireccionValueObject
     */
    validateData(): void {
        this.validarEstructura();
    }

    /**
     *Funsión que valida la estructura de una dirección
     *
     * @private
     * @memberof DireccionValueObject
     */
    private validarEstructura(): void {
        if(EsDireccion(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Direccion',
                message: 'El valor no es una dirección válida'
            };

            this.setError(error);
        }
    }
    
}