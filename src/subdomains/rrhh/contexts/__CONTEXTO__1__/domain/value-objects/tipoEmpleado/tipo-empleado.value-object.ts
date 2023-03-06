import {  ValueObjectBase } from 'src/libs';
import { uuid } from 'uuidv4';

export class TipoEmpleadoValueObject extends ValueObjectBase<string> {
    
    constructor(value? :string){
        super(value? value: uuid())
    }

    validateData(): void {
        throw new Error('Method not implemented.');
    }
    
   
}
