import { ValueObjectBase } from 'src/libs/sofka/';
import { IsValidAccessLevel, IsValidString } from 'src/libs/validations';

export class AccessLevelValueObject extends ValueObjectBase<string>{

    constructor(value: string) {
        super(value);
    }

    validateData(): void {
        this.validateEmpty();
        this.validateIsString();
        this.validateStructure();
    }

    /**
     *Validamos que el objeto no sea null o este vacio
     *
     * @private
     * @memberof AccessLevelValueObject
     */
    private validateEmpty(): void {
        if (this.value === null || this.value === undefined) {
            const error = {
                field: 'AccessLevel',
                message: 'No se proporciono una nivel de acceso'
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si lel nivel de acceso corresponde a los indicados
     * Level1 | Level2 | Level3
     *
     * @private
     * @memberof AccessLevelValueObject
     */
    private validateStructure(): void {
        if (this.value && IsValidAccessLevel(this.value) === false) {
            const error = {
                field: 'AccessLevel',
                message: `${this.value} , no es un nivel de acceso valido`
            };
            this.setError(error);
        }
    }

    /**
     *Validamos si es un dato tipo string
     *
     * @private
     * @memberof AccessLevelValueObject
     */
    private validateIsString(): void {
        if (this.value && IsValidString(this.value) === false) {
            const error = {
                field: 'AccessLevel',
                message: `${this.value} , no es un dato tipo string`
            };
            this.setError(error);
        }
    }
}
