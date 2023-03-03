import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';
import { v4 as uuid } from "uuid";
import { IsUUID } from 'src/libs/sofka/validations/is-uuid.validation';

export class UUIDValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : uuid());
    }

    validateData(): void {

        this.validateContent();
        this.validateStructure();
    }

    /**
     * Validates that the value object given is not empty or null
     *
     * @private
     * @memberof UUIDValueObject
     */
    private validateContent(): void {

        if ( !this.value ) {

            const error = {
                field: 'UUID',
                message: 'Not UUID was given!'
            };

            this.setError(error);
        }
    }

    /**
     * Validates the structure of the value object given
     * It must be a valid UUID v4
     * 
     * @private
     * @memberof UUIDValueObject
     */
    private validateStructure(): void {

        if (this.value && IsUUID(this.value) === false) {

            const error = {
                field: 'UUID',
                message: `${this.value} is not a valid v4 UUID!`
            };

            this.setError(error);
        }
    }
}