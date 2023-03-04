import { ValueObjectBase } from "../../../../../../../libs/sofka/bases/object-value.base";

export class AmountValueObject extends ValueObjectBase<number> {

    constructor(value?: number) {
        super(value ? value : Number.POSITIVE_INFINITY);
    }

    /**
     * checks that the VO data is valid
     *
     * @memberof AmountValueObject
     */
    validateData(): void {

        this.validateContent();       
    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * maximum length
     * @private
     * @memberof AmountValueObject
     */
    private validateContent(): void {

        if (this.value == Number.POSITIVE_INFINITY) {

            const error = {
                field: 'Amount',
                message: 'Not Amount was given!'
            };

            this.setError(error);
        }

        // checks that the Amount given is not a negative number ( not negatives allow )
        if ( this.value < 0 ) {
            const error = {
                field: 'Amount',
                message: `The Amount can't be negative!`
            };

            this.setError(error);
        }
    }    
}