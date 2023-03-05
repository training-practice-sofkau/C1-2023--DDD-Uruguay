import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidLocation } from 'src/libs/validations';

export class LocationValueObject extends ValueObjectBase<string>{

    constructor(value: string) {
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
     * @memberof LocationValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Location',
                message: 'No se proporciono una localizacion de piso'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si la localizacion de piso corresponde a los indicados
     * Piso1 | Piso2 | Piso3 | Piso4 | Piso5
     *
     * @private
     * @memberof LocationValueObject
     */
    private validateStructure(): void {
        if(this.value && IsValidLocation(this.value) === false) {
            const error = {
                field: 'Location',
                message: `${this.value} , no es la localizacion de un piso valido`
            };
            this.setError(error);
        }
    }
}
