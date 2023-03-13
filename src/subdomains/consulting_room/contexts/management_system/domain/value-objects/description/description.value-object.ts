import { ValueObjectBase } from '@sofka';
import { IsEmpty, IsNumberAsString, StringMaxLength } from '@validations';

export class DescriptionValueObject extends ValueObjectBase<string>{
    validateData(): void {
        this.validateStructure();
    }

    private validateStructure(): void {
        if (IsEmpty(this.value)) {
            const error = {
                field: 'description',
                message: 'la descripction es obligatoria',
            };
            this.setError(error);
        } else if (this.value && StringMaxLength(this.value, 20)) {
            const error = {
                field: 'description',
                message: 'La descripcion no puede ser mayor a 20 caracteres, debe ser breve...',
            };
            this.setError(error);
        } else if (this.value && IsNumberAsString(this.value)) {
            const error = {
                field: 'description',
                message: 'La descripcion no es un número válido',
            };
            this.setError(error);
        }
    }
}