import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';
import { v4 as uuid } from "uuid";
import { IsUUID } from 'src/libs/validations/is-uuid.validation';

export class UUIDValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : uuid());
    }


    /**
     *  checks that the VO data is valid
     *
     * @memberof UUIDValueObject
     */
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

        if (this.value === '') {

            const error = {
                field: 'UUID',
                message: 'Not UUID was given!'
            };

            this.setError(error);
        }

        // checks that the UUID given is not more than 36 char long (standard UUID lenght)
        if (this.value.length > 36) {
            const error = {
                field: 'UUID',
                message: 'The UUID value given is too long!'
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