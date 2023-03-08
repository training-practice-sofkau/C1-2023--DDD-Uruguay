import { IsEmptyOrNull } from "src/libs/validations/checkIsEmptyOrNull.validation";
import { ValueObjectBase } from "../../../../../../../../libs/sofka/bases/object-value.base";
import { IsEmail } from "../../../../../../../../libs/validations/email.validation";
import { StringBiggerThanMaxLength } from '../../../../../../../../libs/validations/string-max-length.validation';
import { StringSmallerThanMinLength } from '../../../../../../../../libs/validations/string-min-length.validation';

export class EmailValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : null);
    }


    /**
     *  checks that the VO data is valid
     *
     * @memberof EmailValueObject
     */
    validateData(): void {

        this.validateContent();
        this.validateStructure();

    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * maximum length
     * 
     * @private
     * @memberof EmailValueObject
     */
    private validateContent(): void {

        if (IsEmptyOrNull(this.value)) {

            const error = {
                field: 'Email',
                message: 'Not Email value was given!'
            };

            this.setError(error);
        }

        // checks that the email given is not more than 150 char long
        if(StringBiggerThanMaxLength(this.value, 150)){
            const error = {
                field: 'Email',
                message: 'The Email value given is too long!'
            };
            this.setError(error);
        }

         // checks that the email given is not less than 3 char long
         if(StringSmallerThanMinLength(this.value, 3)){
            const error = {
                field: 'Email',
                message: 'The Email value given is too short!'
            };
            this.setError(error);
        }
    }

    /**
     * Validates the structure of the value object given
     * It must be a valid Email
     * 
     * @private
     * @memberof EmailValueObject
     */
    private validateStructure(): void {

        if (this.value && IsEmail(this.value)) {

            const error = {
                field: 'Email',
                message: `${this.value} is not a valid email`
            };

            this.setError(error);
        }
    }
}