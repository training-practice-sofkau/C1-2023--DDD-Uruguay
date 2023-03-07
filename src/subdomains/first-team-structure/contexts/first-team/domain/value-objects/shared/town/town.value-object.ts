import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface/error-object-value.interface';
export class TownValueObject extends ValueObjectBase<string>{
    validateData(): void {
        this.stringValid();
        this.minLength();
        this.maxLength();
    }

    /**
     *Check minimum characters, If is under 3 return an error.
     *
     * @private
     * @memberof TownValueObject
     */
    private minLength() {
        if(this.value.trim().length < 3) {
            const error: IErrorValueObject = {
                field: 'Town',
                message: 'Min length not valid, required at least 3 characters'
            }

            this.setError(error);
        }
    }
    
    /**
     *Check maximum characters, If is over 30 return an error.
     *
     * @private
     * @memberof TownValueObject
     */
    private maxLength() {
        if(this.value.trim().length > 30) {
            const error: IErrorValueObject = {
                field: 'Town',
                message: 'Max length not valid, required less than 30 characters'
            }

            this.setError(error);
        }
    }

    /**
     *Check if is a valid string, if is not valid return an error.
     *
     * @private
     * @memberof TownValueObject
     */
    private stringValid() {
        if(typeof this.value === 'string') {
            const error: IErrorValueObject = {
                field: 'Town',
                message: 'Value incorrect format, string required'
            }

            this.setError(error);
        }
    }

}
