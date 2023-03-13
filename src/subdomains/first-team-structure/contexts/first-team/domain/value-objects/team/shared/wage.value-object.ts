import { IErrorValueObject, ValueObjectBase } from "src/libs";

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
