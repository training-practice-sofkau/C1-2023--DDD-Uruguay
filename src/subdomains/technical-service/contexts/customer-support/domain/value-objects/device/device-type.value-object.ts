
import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';
import { StringBiggerThanMaxLength, IsEmptyOrNull } from '../../../../../../../libs/validations';

export class DeviceTypeValueObject extends ValueObjectBase<string>{

    //TODO: este VO puede usar un Enum para definir los tipos de dispositivos
    // implementar si hay tiempo

    constructor(value?: string){
        super(value ? value : null);
    }

    /**
     * checks that the VO data is valid
     *
     * @memberof DeviceTypeValueObject
     */
    validateData(): void {
        this.validateContent();        
    }

    /**
     * Validates that the value object given is not empty, null or exceeds
     * minimu and maximum length
     *
     * @private
     * @memberof DeviceTypeValueObject
     */
    private validateContent() {

        if (IsEmptyOrNull(this.value)) {
            const error = {
                field: 'DeviceType',
                message: 'Not Device Type value was given!'
            };

            this.setError(error);
        }

        // checks that the string given is not more than 100 char long
        if(StringBiggerThanMaxLength(this.value, 100)){
            const error = {
                field: 'Note',
                message: 'The Device Type given is too long!'
            };

            this.setError(error);
        }        
    }
}