import { IsPhoneNumber } from '../../../../../../../../libs/validations/phone.validation';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';

export class PhoneValueObject extends ValueObjectBase<string> {

    constructor(value?: string) {
        super(value ? value : '');
    }


    /**
     * checks that the VO data is valid
     *
     * @memberof PhoneValueObject
     */
    validateData(): void {

        this.validateContent();
        this.validateStructure();

    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * maximum length
     * @private
     * @memberof PhoneValueObject
     */
    private validateContent(): void {

        if (this.value === '') {

            const error = {
                field: 'Phone',
                message: 'Not Phone value was given!'
            };

            this.setError(error);
        }

        // checks that the Phone given is not more than 12 char long
        if (this.value.length > 12) {
            const error = {
                field: 'Phone',
                message: 'The Phone value given is too long!'
            };

            this.setError(error);
        }
    }

    /**
     * Validates the structure of the value object given
     * It must be a valid phone number
     * 
     * @private
     * @memberof PhoneValueObject
     */
    private validateStructure(): void {

        if (this.value && IsPhoneNumber(this.value)) {

            const error = {
                field: 'Phone',
                message: `${this.value} is not a valid Phone`
            };

            this.setError(error);
        }
    }
}