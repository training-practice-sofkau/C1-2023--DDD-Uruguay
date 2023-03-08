import { EsNombre, LongitudMaxima, LongitudMinima } from '../../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface';


export class NombreValueObject extends ValueObjectBase<string> {

    constructor(value: string) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof NombreValueObject
     */
    validateData(): void {
        this.validarEstructura();
        this.validarLongitudMinima(3);
        this.validarLongitudMaxima(40);
    }

    /**
     *Funsión que valida la estructura de un nombre
     *
     * @private
     * @memberof NombreValueObject
     */
    private validarEstructura(): void {
        if(EsNombre(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Nombre',
                message: 'El nombre no es válido'
            };

            this.setError(error);
        }
    }

    /**
     *Funsión que valida la longitud mínima de un nombre
     *
     * @private
     * @param {number} longitud
     * @memberof NombreValueObject
     */
    private validarLongitudMinima(longitud: number): void {
        if(LongitudMinima(this.value, longitud) === false) {

            const error: IErrorValueObject = {
                field: 'Nombre',
                message: 'El nombre debe tener una longitud mínima de '+longitud+' caracteres'
            };

            this.setError(error);
        }
    }

    /**
     *Funsión que valida la longitud máxima de un nombre
     *
     * @private
     * @param {number} longitud
     * @memberof NombreValueObject
     */
     private validarLongitudMaxima(longitud: number): void {
        if(LongitudMaxima(this.value, longitud) === false) {

            const error: IErrorValueObject = {
                field: 'Nombre',
                message: 'El nombre debe tener una longitud máxima de '+longitud+' caracteres'
            };

            this.setError(error);
        }
    }
    
}