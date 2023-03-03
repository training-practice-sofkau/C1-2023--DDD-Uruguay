import { ValueObjectBase } from "src/libs";

export class NombreValueObject extends ValueObjectBase<string>{
   
    validateData(): void {
        throw new Error("Method not implemented.");
    }
    
   
}
