import { ValueObjectBase } from 'src/libs/sofka/';
import { IsUUID, IsValidString } from 'src/libs/validations/';
import { v4 as uuid } from "uuid";


export class IdValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : uuid());
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsString();
        this.validateLength();
        this.validateStructure();
    }

    /**
     *Validamos que la estructura es un UUID v4
     *
     * @private
     * @memberof IdValueObject
     */
    private validateStructure(): void {
        if (this.value && IsUUID(this.value) === false) {
            const error = {
                field: 'ID',
                message: `El ID: ${this.value} , no es una estructura UUID v4 valida`
            };
            this.setError(error);
        }
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof IdValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'ID',
                message: 'No se proporciono un ID'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos la longitud del objeto
     *
     * @private
     * @memberof IdValueObject
     */
    private validateLength(): void {
        if (this.value.length > 36) {
            const error = {
                field: 'ID',
                message: 'Se proporciono un ID muy largo'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo string
     *
     * @private
     * @memberof IdValueObject
     */
    private validateIsString(): void {
        if (this.value && IsValidString(this.value) === false) {
            const error = {
                field: 'ID',
                message: `${this.value} , no es un dato tipo string`
            };
            this.setError(error);
        }
    }

}
