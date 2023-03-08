import { IErrorValueObject, ValueObjectBase } from "src/libs";

export class SpecialtyValueObject extends ValueObjectBase<string>{
    validateData(): void {
        this.stringValid();
        this.minLength();
        this.maxLength();
    }

    /**
     *Checks min length, if length is under 3 characters return an error.
     *
     * @private
     * @memberof SpecialtyValueObject
     */
    private minLength() {
        if(this.value.trim().length < 3) {
            const error: IErrorValueObject = {
                field: 'Country',
                message: 'Min length not valid, required at least 3 characters'
            }

            this.setError(error);
        }
    }
    
    /**
     *Checks max length, if length is over 40 characters return an error.
     *
     * @private
     * @memberof SpecialtyValueObject
     */
    private maxLength() {
        if(this.value.trim().length > 40) {
            const error: IErrorValueObject = {
                field: 'Country',
                message: 'Max length not valid, required less than 40 characters'
            }

            this.setError(error);
        }
    }

    /**
     *Check type of value, If is not an string return an error.
     *
     * @private
     * @memberof SpecialtyValueObject
     */
    private stringValid() {
        if(typeof this.value === 'string') {
            const error: IErrorValueObject = {
                field: 'Country',
                message: 'Value incorrect format, string required'
            }

            this.setError(error);
        }
    }
}