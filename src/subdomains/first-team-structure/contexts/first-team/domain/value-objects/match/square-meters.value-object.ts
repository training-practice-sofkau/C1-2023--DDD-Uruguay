import { IErrorValueObject, ValueObjectBase } from "src/libs";

export class SquareMetersValueObject extends ValueObjectBase<number>{
    validateData(): void {
        this.validNumber();
        this.minSquareMeters();
        this.maxSquareMeters();
    }

    /**
     *Check minimum square meters, If is under 375 return an error.
     *
     * @private
     * @memberof SquareMetersValueObject
     */
    private minSquareMeters() {
        if(this.value < 375) {
            const error: IErrorValueObject = {
                field: 'Square Meters',
                message: 'The stadium required a minimum of 375 square meters'
            }

            this.setError(error);
        }
    }

    /**
     *Check maximum square meters, If is over 1050 return an error.
     *
     * @private
     * @memberof SquareMetersValueObject
     */
    private maxSquareMeters() {
        if(this.value > 1050) {
            const error: IErrorValueObject = {
                field: 'Square Meters',
                message: 'The stadium required a maximum of 1050 square meters'
            }

            this.setError(error);
        }
    }

    /**
     *Check if is a valid number, if is not valid return an error.
     *
     * @private
     * @memberof SquareMetersValueObject
     */
    private validNumber() {
        if(typeof this.value !== 'number') {
            const error: IErrorValueObject = {
                field: 'Square Meters',
                message: 'Number required on Square Meters'
            }

            this.setError(error);
        }
    }

}
