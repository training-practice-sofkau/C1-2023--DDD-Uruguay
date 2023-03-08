import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidDocument, IsValidNumber } from 'src/libs/validations/';

export class DocumentValueObject extends ValueObjectBase<number> {

    constructor(value?: number) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsNumber();
        this.validateStructure();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof DocumentValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'Document',
                message: 'No se proporciono un Documento'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos la estructura del documento 
     * deben ser 8 numero sin letras ni caracteres especiales
     *
     * @private
     * @memberof DocumentValueObject
     */
    private validateStructure(): void {
        if(this.value && IsValidDocument(this.value) === false) {
            const error = {
                field: 'Document',
                message: `${this.value} , no es un documento valido`
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo number
     *
     * @private
     * @memberof DocumentValueObject
     */
    private validateIsNumber(): void {
        if(this.value && IsValidNumber(this.value) === false) {
            const error = {
                field: 'Document',
                message: `${this.value} , no es un dato tipo number`
            };
            this.setError(error);
        }
    }

}
