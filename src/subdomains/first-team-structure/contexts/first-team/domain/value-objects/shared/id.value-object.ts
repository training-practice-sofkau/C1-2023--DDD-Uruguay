import { IErrorValueObject, validateUUID, ValueObjectBase } from "src/libs";


export class IdValueObject extends ValueObjectBase<string> {

    validateData(): void {
        this.checkUUID();
    }

    /**
     *Checks the value of attribute id, If is not a correct UUID return an Error.
     *
     * @private
     * @memberof IdValueObject
     */
    private checkUUID(): void {
        if(typeof this.value !== 'string') {
            const error: IErrorValueObject = {
                field: 'ID',
                message: 'Type not valid'
            }

            this.setError(error)
        }
        
        if(this.value.length !== 36) {
            const error: IErrorValueObject = {
                field: 'ID',
                message: 'Is not a correct UUID length'
            }

            this.setError(error)
        }
        
        if(!validateUUID(this.value)) {
            const error: IErrorValueObject = {
                field: 'ID',
                message: 'Is not an UUID'
            }

            this.setError(error)
        }

    }
}
