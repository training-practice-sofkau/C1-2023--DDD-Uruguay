import { ValueObjectBase } from 'src/libs/';
import { v4 as uuid } from 'uuid';
import { IsUUID } from 'src/libs/validations';


export class BenefitedIdValueObject extends ValueObjectBase<string>{
    constructor(value?: string) {
        super(value ? value : uuid());
    }

    validateData(): void {
        this.validateStructure();
    }

    private validateStructure(): void {
        if (this.value && IsUUID(this.value) === false) {
            const error = {
                field: 'BenefitedID',
                message: 'The id does not contain a valid UUIDV4 structure'
            }
            this.setError(error)
        }
    }

}