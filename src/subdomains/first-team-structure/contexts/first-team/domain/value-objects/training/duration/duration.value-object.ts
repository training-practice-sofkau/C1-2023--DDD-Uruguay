import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';
import { IErrorValueObject } from '../../../../../../../../libs/sofka/interface/error-object-value.interface';

export class DurationValueObject extends ValueObjectBase<number>{
    validateData(): void {
        throw new Error('Method not implemented.');
    }

    private isPositive() {
        if(this.value <= 0) {
            const error: IErrorValueObject = {
                field: 'Duration',
                message: 'Require a number over 0'
            }

            this.setError(error);
        }
    }

    private validNumber() {
        if(typeof this.value !== 'number') {
            const error: IErrorValueObject = {
                field: 'Age',
                message: 'Is not a Number value'
            }

            this.setError(error);
        }
    }

}
