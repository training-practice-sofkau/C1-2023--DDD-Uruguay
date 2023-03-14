import { IErrorValueObject, ValueObjectBase } from "src/libs";

export class TypeValueObject extends ValueObjectBase<string>{
    validateData(): void {
        this.stringValid();
        this.minLength();
        this.maxLength();
    }

    private minLength() {
        if(this.value.trim().length < 3) {
            const error: IErrorValueObject = {
                field: 'Type',
                message: 'Min length not valid, required at least 3 characters'
            }

            this.setError(error);
        }
    }
    
    private maxLength() {
        if(this.value.trim().length > 30) {
            const error: IErrorValueObject = {
                field: 'Type',
                message: 'Max length not valid, required less than 30 characters'
            }

            this.setError(error);
        }
    }

    private stringValid() {
        if(typeof this.value === 'string') {
            const error: IErrorValueObject = {
                field: 'Type',
                message: 'Value incorrect format, string required'
            }

            this.setError(error);
        }
    }

}
