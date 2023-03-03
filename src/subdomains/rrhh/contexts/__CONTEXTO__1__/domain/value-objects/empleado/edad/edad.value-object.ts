import { ValueObjectBase } from 'src/libs';
export class Edad extends ValueObjectBase<number> {
   
    validateData(): void {
        throw new Error('Method not implemented.');
    }
    
   
}
