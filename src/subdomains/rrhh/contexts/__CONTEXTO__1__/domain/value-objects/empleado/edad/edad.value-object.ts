import { IErrorValueObject, ValueObjectBase } from 'src/libs';
export class EdadValueObject implements ValueObjectBase<number> {
    
    get value(): number {
        throw new Error('Method not implemented.');
    }
    set value(value: number) {
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
    valueOf(): number {
        throw new Error('Method not implemented.');
    }
}
