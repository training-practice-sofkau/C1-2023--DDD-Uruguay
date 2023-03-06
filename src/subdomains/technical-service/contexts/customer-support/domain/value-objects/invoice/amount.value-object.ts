
import { IsEmptyOrNull, IsPositiveNumber  } from "../../../../../../../libs/validations";
import { ValueObjectBase } from "../../../../../../../libs/sofka/bases";

export class AmountValueObject extends ValueObjectBase<number> {

    constructor(value?: number) {
        super(value ? value : null);
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

        if (IsEmptyOrNull(this.value)) {
            const error = {
                field: 'Amount',
                message: 'Not Amount was given!'
            };

            this.setError(error);
        }

        // checks that the Amount given is not a negative number ( not negatives allow )
        if (IsPositiveNumber(this.value) === false ) {
            const error = {
                field: 'Amount',
                message: `The Amount can't be negative!`
            };

            this.setError(error);
        }
    }    
}