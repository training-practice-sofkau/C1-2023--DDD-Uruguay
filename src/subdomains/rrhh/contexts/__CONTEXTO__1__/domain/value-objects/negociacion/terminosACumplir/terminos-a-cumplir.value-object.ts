import {  ValueObjectBase } from 'src/libs';
import { uuid4 } from 'uuid';

export class TerminosACumplir extends ValueObjectBase<string> {
   
   constructor(value?:string){
    super(value ? value : uuid4() )
   }

    validateData(): void {
        throw new Error('Method not implemented.');
    }
     
  
}


