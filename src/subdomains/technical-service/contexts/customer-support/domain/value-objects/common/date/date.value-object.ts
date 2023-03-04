import { IsDate } from 'src/libs/validations/date.validation';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';

export class DateValueObject extends ValueObjectBase<Date> {

    constructor(value?: Date) {
        super(value ? value : null)
    }

    validateData(): void {
        this.validateContent();
        this.validateStructure();
    }


    private validateContent() {

        if (this.value === null) {

            const error = {
                field: 'Date',
                message: 'Not Date value was given!'
            };

            this.setError(error);
        }
    }

    private validateStructure() {
        if (this.value && IsDate(this.value) === false ) {

            const error = {
                field: 'Date',
                message: 'Not valid Date value!'
            };

            this.setError(error);
        }
    }

}