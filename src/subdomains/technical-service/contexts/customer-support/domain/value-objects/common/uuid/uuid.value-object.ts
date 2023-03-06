import { v4 as uuid } from "uuid";

import { ValueObjectBase } from '../../../../../../../../libs/sofka/bases/object-value.base';
import { IsUUID, IsEmptyOrNull, StringBiggerThanMaxLength } from '../../../../../../../../libs/validations';

export class UUIDValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : uuid());
    }

    //TODO: metodo para crear nuevo UUID

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

        if (IsEmptyOrNull(this.value)) {
            const error = {
                field: 'UUID',
                message: 'Not UUID was given!'
            };

            this.setError(error);
        }

        // checks that the UUID given is not more than 36 char long (standard UUID lenght)
        if (StringBiggerThanMaxLength(this.value, 36)) {
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