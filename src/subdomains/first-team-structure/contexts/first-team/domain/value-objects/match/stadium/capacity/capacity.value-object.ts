import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases/object-value.base';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface/error-object-value.interface';
export class CapacityValueObject extends ValueObjectBase<number>{
    validateData(): void {
        this.validNumber();
        this.minCapacity();
    }

    /**
     *Check minimum capacity, If is under 12000 return an error.
     *
     * @private
     * @memberof CapacityValueObject
     */
    private minCapacity() {
        if(this.value < 12000) {
            const error: IErrorValueObject = {
                field: 'Capacity',
                message: 'The stadium required a minimum of 12000 of capacity'
            }

            this.setError(error);
        }
    }

    /**
     *Check if is a number, if is not a number return an error.
     *
     * @private
     * @memberof CapacityValueObject
     */
    private validNumber() {
        if(typeof this.value !== 'number') {
            const error: IErrorValueObject = {
                field: 'Capacity',
                message: 'Number required on Capacity'
            }

            this.setError(error);
        }
    }
}
