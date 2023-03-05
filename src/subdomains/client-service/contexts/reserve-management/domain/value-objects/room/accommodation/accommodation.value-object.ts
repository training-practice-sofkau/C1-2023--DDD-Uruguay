import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidAccommodation } from 'src/libs/validations/';

export class AccommodationValueObject extends ValueObjectBase<string>{

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
     * @memberof AccommodationValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Accommodation',
                message: 'No se proporciono una acomodacion valida'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si la acomodacion corresponde a las indicadas
     * Basica | Lujo | VIP
     *
     * @private
     * @memberof AccommodationValueObject
     */
    private validateStructure(): void {
        if(this.value && IsValidAccommodation(this.value) === false) {
            const error = {
                field: 'Accommodation',
                message: `${this.value} , no es una acomodacion valida`
            };
            this.setError(error);
        }
    }
}
