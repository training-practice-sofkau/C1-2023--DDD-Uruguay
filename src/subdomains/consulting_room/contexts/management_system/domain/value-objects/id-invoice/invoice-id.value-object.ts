import { ValueObjectBase } from '@sofka';
import { IsUUID } from '@validations';
import { v4 as uuidv4 } from 'uuid';

export class InvoiceIdObjectValue extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value ? value : uuidv4());
  }

  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (this.value && IsUUID(this.value) === false) {
      const error = {
        field: 'InvoiceId',
        message: 'El ID no contiene una estructura válida UUIDv4',
      };
      this.setError(error);
    }
  }
}