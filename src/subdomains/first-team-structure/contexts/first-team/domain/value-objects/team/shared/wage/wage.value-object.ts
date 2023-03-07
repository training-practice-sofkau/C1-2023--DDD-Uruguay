import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases/object-value.base';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface/error-object-value.interface';
export class WageValueObject extends ValueObjectBase<number>{
    validateData(): void {
        this.validValue();
        this.minWage();
    }

    private minWage() {
        if(this.value < 500) {
            const error: IErrorValueObject = {
                field: 'Wage',
                message: 'Min wage valid is 500'
            }

            this.setError(error);
        }
    }

     private validValue(): void {
        if(typeof this.value !== 'number') {
            const error: IErrorValueObject = {
                field: 'Wage',
                message: 'Is not a Number value'
            }

            this.setError(error);
        }
    }
}
