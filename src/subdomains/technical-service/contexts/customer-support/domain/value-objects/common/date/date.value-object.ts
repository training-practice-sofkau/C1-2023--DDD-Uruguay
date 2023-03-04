import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';

export class DateValueObject extends ValueObjectBase<Date> {

    constructor(value?: Date) {
        super(value ? value : null)
    }

    /**
     * checks that the VO data is valid
     *
     * @memberof DateValueObject
     */
    validateData(): void {
        this.validateContent();        
    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * maximum length
     *
     * @private
     * @memberof DateValueObject
     */
    private validateContent() {

        if (this.value === null) {

            const error = {
                field: 'Date',
                message: 'Not Date value was given!'
            };

            this.setError(error);
        }
    }   

}