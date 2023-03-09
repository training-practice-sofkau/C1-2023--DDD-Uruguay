import { ValueObjectBase } from "@sofka";
import { IsEmpty, IsNumberAsString, StringMaxLength } from "@validations";


export class PhoneObjectValue extends ValueObjectBase<string> {
  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (IsEmpty(this.value) === true) {
      const error = {
        field: 'phone',
        message: 'El valor de "phone" es obligatorio',
      };
      this.setError(error);
    } else if (this.value && StringMaxLength(this.value, 9)) {
      const error = {
        field: 'phone',
        message: 'El telefono no puede superar 9 digitos',
      };
      this.setError(error);
    } else if (this.value && IsNumberAsString(this.value) === false) {
      const error = {
        field: 'phone',
        message: 'El valor de "phone" no es un número válido',
      };
      this.setError(error);
    }
  }
}
