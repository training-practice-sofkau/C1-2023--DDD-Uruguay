import { IErrorValueObject, ValueObjectBase } from "src/libs";

export class ScoreValueObject extends ValueObjectBase<string>{
    validateData(): void {
        this.stringValid();
        this.minLength();
        this.maxLength();
    }


    /**
     *Check minimum characters, If is under 3 return an error.
     *
     * @private
     * @memberof ScoreValueObject
     */
    private minLength() {
        if(this.value.trim().length < 3) {
            const error: IErrorValueObject = {
                field: 'Score',
                message: 'Min length not valid, required at least 3 characters'
            }

            this.setError(error);
        }
    }
    
    /**
     *Check maximum characters, If is over 30 return an error.
     *
     * @private
     * @memberof ScoreValueObject
     */
    private maxLength() {
        if(this.value.trim().length > 30) {
            const error: IErrorValueObject = {
                field: 'Score',
                message: 'Max length not valid, required less than 30 characters'
            }

            this.setError(error);
        }
    }

    /**
     *Check if is a string, If is not a string return an error.
     *
     * @private
     * @memberof ScoreValueObject
     */
    private stringValid() {
        if(typeof this.value === 'string') {
            const error: IErrorValueObject = {
                field: 'Score',
                message: 'Value incorrect format, string required'
            }

            this.setError(error);
        }
    }
}
