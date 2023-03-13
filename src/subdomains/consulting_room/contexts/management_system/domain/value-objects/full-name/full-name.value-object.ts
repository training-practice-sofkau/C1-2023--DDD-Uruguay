import { ValueObjectBase } from "@sofka";
import { StringMaxLength, IsEmpty } from "@validations";


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
        } else if (this.value && StringMaxLength(this.value, 20)) {
            const error = {
                field: 'FullName',
                message: 'El nombre completo mayor a 20 caracteres, debe ser breve...',
            };
            this.setError(error);
        }

    }
}