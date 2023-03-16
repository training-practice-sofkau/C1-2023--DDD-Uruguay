import { ValueObjectBase } from '@sofka';
import { IsEmpty, IsNumber } from '@validations';



export class AmountObjectValue extends ValueObjectBase<number> {
  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (IsEmpty(this.value) === true) {
      const error = {
        field: 'Amount',
        message: 'El el monto es obligatorio',
      };
      this.setError(error);
    } else if (this.value <= 0) {
      const error = {
        field: 'Amount',
        message: 'El el monto debe ser un valor positivo',
      };
      this.setError(error);
    } else if (this.value && IsNumber(this.value)) {
      const error = {
        field: 'Amount',
        message: 'El monto no es un número válido',
      };
      this.setError(error);
    }
  }
}
