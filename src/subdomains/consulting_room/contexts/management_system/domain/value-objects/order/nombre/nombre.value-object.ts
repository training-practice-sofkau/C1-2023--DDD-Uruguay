import { ValueObjectBase, IsEmpty, StringMaxLength } from '../../../../../../../../libs/';

export class FullNameValueObject extends ValueObjectBase<string>{

    validateData(): void {
        this.validateStructure();
    }

    private validateStructure(): void {
        if (IsEmpty(this.value)) {
            const error = {
                field: 'FullName',
                message: 'El nombre completo es obligatoria',
            };
            this.setError(error);
        }

        if (this.value && StringMaxLength(this.value, 20)) {
            const error = {
                field: 'FullName',
                message: 'El nombre completo supera el maximo de caracteres, que es 20',
            };
            this.setError(error);
        }
    }

}