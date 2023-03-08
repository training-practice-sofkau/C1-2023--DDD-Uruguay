import { IsEmptyOrNull, StringBiggerThanMaxLength } from '../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';
export class RoleValueObject extends ValueObjectBase<string>{

    constructor(value?: string){
        super(value ? value : null);
    }

    /**
     * checks that the VO data is valid
     *
     * @memberof RoleValueObject
     */
    validateData(): void {
        this.validateContent();        
    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * minimun and maximum length
     *
     * @private
     * @memberof RoleValueObject
     */
    private validateContent() {

        if (IsEmptyOrNull(this.value)) {
            const error = {
                field: 'Role',
                message: 'Not Role value was given!'
            };

            this.setError(error);
        }

        // checks that the string given is not more than 100 char long
        if(StringBiggerThanMaxLength(this.value, 100)){
            const error = {
                field: 'Role',
                message: 'The Role given is too long!'
            };

            this.setError(error);
        }        
    }
}