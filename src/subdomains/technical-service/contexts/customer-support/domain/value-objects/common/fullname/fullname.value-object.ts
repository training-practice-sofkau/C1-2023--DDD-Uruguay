import { IsValidFullname } from '../../../../../../../../libs/validations/fullname.validation';
import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';
import { StringBiggerThanMaxLength } from '../../../../../../../../libs/validations/string-max-length.validation';
import { IsEmptyOrNull } from 'src/libs/validations/checkIsEmptyOrNull.validation';
import { StringSmallerThanMinLength } from '../../../../../../../../libs/validations/string-min-length.validation';
export class FullnameValueObject extends ValueObjectBase<string> {
    
    constructor(value?: string){

        super(value ? value : null);
    }
    

    /**
     * checks that the VO data is valid
     *
     * @memberof FullnameValueObject
     */
    validateData(): void {
        this.validateContent();
        this.validateStructure();
    }
   

    /**
     * Validates that the value object given is not empty, null or exceeds
     * minimu and maximum length
     *
     * @private
     * @memberof FullnameValueObject
     */
    private validateContent() {

        if (IsEmptyOrNull(this.value)) {
            const error = {
                field: 'Fullname',
                message: 'Not data was given!'
            };

            this.setError(error);
        }

        // checks that the string given is not more than 250 char long
        if(StringBiggerThanMaxLength(this.value, 150)){
            const error = {
                field: 'Fullname',
                message: 'The Full Name given is too long!'
            };

            this.setError(error);
        }

        // checks that the string given is less than 10 char long
         if(StringSmallerThanMinLength(this.value, 5)){
            const error = {
                field: 'Fullname',
                message: 'The Full Name given is too short!'
            };

            this.setError(error);
        }
    }


    /**
     *  Validates the structure of the value object given
     *
     * @private
     * @memberof FullnameValueObject
     */
    private validateStructure() {

        if (this.value && IsValidFullname(this.value)) {

            const error = {
                field: 'Fullname',
                message: `${this.value} is not a valid Full Name`
            };

            this.setError(error);
        }
    }
}