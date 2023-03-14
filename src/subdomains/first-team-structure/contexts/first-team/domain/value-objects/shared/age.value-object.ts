import { IErrorValueObject, ValueObjectBase } from "src/libs";


export class AgeValueObject extends ValueObjectBase<number> {

    validateData(): void {
        this.validValue();
        this.minAge();
    }

    /**
     *Check if is a valid number. If is not a number return an error
     *
     * @private
     * @memberof AgeValueObject
     */
    private validValue(): void {
        if(typeof this.value !== 'number') {
            const error: IErrorValueObject = {
                field: 'Age',
                message: 'Is not a Number value'
            }

            this.setError(error);
        }
    }

    /**
     *Check if is higher than 18 or equal. If is under 18 return an error
     *
     * @private
     * @memberof AgeValueObject
     */
    private minAge(): void {
        if(this.value < 18) {
            const error: IErrorValueObject = {
                field: 'Age',
                message: 'Age is under 18'
            }

            this.setError(error);
        }
    }
}
