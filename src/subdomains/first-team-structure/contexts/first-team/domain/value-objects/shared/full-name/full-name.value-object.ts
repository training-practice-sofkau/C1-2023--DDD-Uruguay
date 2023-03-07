import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface/error-object-value.interface';

export class FullNameValueObject extends ValueObjectBase<string> {
    validateData(): void {
        this.stringValid();
        this.minLength();
        this.maxLength();
    }

    /**
     *Checks min length, if length is under 3 characters return an error.
     *
     * @private
     * @memberof FullNameValueObject
     */
    private minLength() {
        if(this.value.trim().length < 3) {
            const error: IErrorValueObject = {
                field: 'Fullname',
                message: 'Min length not valid, required at least 3 characters'
            }

            this.setError(error);
        }
    }
    
    /**
     *Checks max length, if length is over 40 characters return an error.
     *
     * @private
     * @memberof FullNameValueObject
     */
    private maxLength() {
        if(this.value.trim().length > 40) {
            const error: IErrorValueObject = {
                field: 'Fullname',
                message: 'Max length not valid, required less than 40 characters'
            }

            this.setError(error);
        }
    }

    /**
     *Check type of value, If is not an string return an error.
     *
     * @private
     * @memberof FullNameValueObject
     */
    private stringValid() {
        if(typeof this.value === 'string') {
            const error: IErrorValueObject = {
                field: 'Fullname',
                message: 'Value incorrect format, string required'
            }

            this.setError(error);
        }
    }
}
