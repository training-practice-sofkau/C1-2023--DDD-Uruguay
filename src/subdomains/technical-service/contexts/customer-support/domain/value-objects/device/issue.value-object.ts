
import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';
import { StringBiggerThanMaxLength, IsEmptyOrNull } from '../../../../../../../libs/validations/';

export class IssueValueObject extends ValueObjectBase<string>{

    constructor(value?: string){
        super(value ? value : null);
    }

    /**
     * checks that the VO data is valid
     *
     * @memberof IssueValueObject
     */
    validateData(): void {
        this.validateContent();        
    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * minimun and maximum length
     *
     * @private
     * @memberof IssueValueObject
     */
    private validateContent() {

        if (IsEmptyOrNull(this.value)) {
            const error = {
                field: 'Issue',
                message: 'Not Issue value was given!'
            };

            this.setError(error);
        }

        // checks that the string given is not more than 250 char long
        if(StringBiggerThanMaxLength(this.value, 250)){
            const error = {
                field: 'Note',
                message: 'The Issue given is too long!'
            };

            this.setError(error);
        }        
    }
}