import { IsBoolean } from 'src/libs/sofka/validations/true-false.validation';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';

export class TrueFalseValueObject extends ValueObjectBase<boolean> {

    constructor(value?: boolean) {
        super(value ? value : null);
    }


    validateData(): void {

        this.validateContent();
        this.validateStructure();
    }


    /**
     * Validates that the value object given is not empty or null
     *
     * @private
     * @memberof TrueFalseValueObject
     */
    private validateContent(): void {

        if (this.value === null) {

            const error = {
                field: 'TrueFalse',
                message: 'Not value was given!'
            };

            this.setError(error);
        }
    }

    /**
     * Validates the structure of the value object given
     * It must be a valid boolean value
     *
     * @private
     * @memberof TrueFalseValueObject
     */
    private validateStructure(): void {

        if (this.value && IsBoolean(this.value)) {

            const error = {
                field: 'TrueFalse',
                message: `${this.value} is not a valid value`
            };

            this.setError(error);
        }
    }

}