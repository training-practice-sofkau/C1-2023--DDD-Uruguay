
import { ValueObjectBase } from '../../../../../../../libs/sofka/bases/object-value.base';
import { IsEmptyOrNull } from '../../../../../../../libs/validations/checkIsEmptyOrNull.validation';

export class WarrantyStatusValueObject extends ValueObjectBase<WarrantyStatus>{
    
    
    constructor(value?: WarrantyStatus){
        super(value ? value : null)
    }
    
    validateData(): void {
    
        this.validateContent();
    }

    /**
     * Validates that the correct values are given to the VO
     *
     * @private
     * @memberof WarrantyStatusValueObject
     */
    private validateContent() {

        if (IsEmptyOrNull(this.value) ||
            (this.value != WarrantyStatus.Canceled && 
            this.value != WarrantyStatus.Finished &&
            this.value != WarrantyStatus.Valid)) {

            const error = {
                field: 'WarrantyStatus',
                message: 'Not valid Warranty Status value was given!'
            };

            this.setError(error);
        }        
    }
}



/**
 * Type of warranty available
 * allows to give some information about the status of the warranty
 *
 * @enum {number} status of warranty
 */
enum WarrantyStatus{
    Valid,
    Finished,
    Canceled
}