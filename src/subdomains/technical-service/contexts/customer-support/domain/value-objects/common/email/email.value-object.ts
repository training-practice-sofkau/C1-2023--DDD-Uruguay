import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";
import { IsEmail } from "src/libs/validations/email.validation";

export class EmailValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : '');
    }

    validateData(): void {

        this.validateContent();
        this.validateStructure();

    }

    /**
     * Validates that the value object given is not empty or null
     *
     * @private
     * @memberof EmailValueObject
     */
    private validateContent(): void {

        if (this.value === '') {

            const error = {
                field: 'Email',
                message: 'Not Email value was given!'
            };

            this.setError(error);
        }

        // checks that the email given is not more than 150 char long
        if(this.value.length > 150){
            const error = {
                field: 'Email',
                message: 'The Email value given is too long!'
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