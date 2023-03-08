import { IsEmptyOrNull } from "src/libs/validations/checkIsEmptyOrNull.validation";
import { ValueObjectBase } from "../../../../../../../../libs/sofka/bases/object-value.base";
import { StringBiggerThanMaxLength } from '../../../../../../../../libs/validations/string-max-length.validation';

export class NoteValueObject extends ValueObjectBase<string> {
    
    constructor(value?: string){

        super(value ? value : null);
    }    

    /**
     * checks that the VO data is valid
     *
     * @memberof NoteValueObject
     */
    validateData(): void {
        this.validateContent();        
    }   

    /**
     * Validates that the value object given is not empty, null or exceeds
     * minimun and maximum length
     *
     * @private
     * @memberof NoteValueObject
     */
    private validateContent() {

        if (IsEmptyOrNull(this.value)) {
            const error = {
                field: 'Note',
                message: 'Not data was given!'
            };

            this.setError(error);
        }

        // checks that the string given is not more than 250 char long
        if(StringBiggerThanMaxLength(this.value, 250)){
            const error = {
                field: 'Note',
                message: 'The Note given is too long!'
            };

            this.setError(error);
        }
    }
   
}