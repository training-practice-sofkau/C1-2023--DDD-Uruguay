import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";

export class EmailValueObject extends ValueObjectBase<string>{

    /* constructor(value?: string) {
        super(value ? value : string);
    } */

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

        if ( !this.value ) {

            const error = {
                field: 'Email',
                message: 'Not Email value was given!'
            };

            this.setError(error);
        }
    }



    /**
     * Validates the structure of the value object given
     * It must be a valid UUID v4
     * 
     * @private
     * @memberof EmailValueObject
     */
    private validateStructure(): void {

        if (this.value   ) {

            const error = {
                field: 'Email',
                message: 'The email given is not valid!'
            };

            this.setError(error);
        }
    }
}