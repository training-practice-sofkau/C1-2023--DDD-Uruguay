import { IErrorValueObject, ValueObjectBase } from 'src/libs';
export class TipoEmpleado implements ValueObjectBase<string> {
    
    get value(): string {
        throw new Error('Method not implemented.');
    }
    set value(value: string) {
        throw new Error('Method not implemented.');
    }
    validateData(): void {
        throw new Error('Method not implemented.');
    }
    hasErrors(): boolean {
        throw new Error('Method not implemented.');
    }
    getErrors(): IErrorValueObject[] {
        throw new Error('Method not implemented.');
    }
    protected setError(error: IErrorValueObject): void {
        throw new Error('Method not implemented.');
    }
    valueOf(): string {
        throw new Error('Method not implemented.');
    }
}
