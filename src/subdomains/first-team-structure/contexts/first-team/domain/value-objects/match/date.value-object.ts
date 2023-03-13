import { IErrorValueObject, ValueObjectBase } from "src/libs";

export class DateValueObject extends ValueObjectBase<Date>{
    validateData(): void {
        this.isDate();
        this.beforeNow();
    }

    /**
     *Check if is a valid Date format, If is not correct return an error.
     *
     * @private
     * @memberof DateValueObject
     */
    private isDate(): void {
        if(!(this.value instanceof Date)) {
            const error: IErrorValueObject = {
                field: 'Date',
                message: 'Is not a valid Date'
            }

            this.setError(error);
        }
    }

    /**
     *Check date value is before than now, If is not before than now return an error.
     *
     * @private
     * @memberof DateValueObject
     */
    private beforeNow(): void {
        if(this.value.getTime() >= Date.now()) {
            const error: IErrorValueObject = {
                field: 'Date',
                message: 'Date have to be older than Date now'
            }

            this.setError(error);
        }
    }

}
