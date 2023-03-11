import { ValueObjectBase } from "src/libs";
import { IsUUID } from "src/libs/validations/uuid-validation";
import {v4 as uuid} from 'uuid';

export class UuidValueObject extends ValueObjectBase<string>{
    
    //Con el constructor objengo el valor 
    constructor(value? : string){
        super(value ? value : uuid())
    }

    //Esta funcion es la que voy a lanzar en el caso de uso
    validateData(): void {
       this.validateUUID();
    }


    private validateUUID() : void {
        
        if(this.value && IsUUID(this.value) === false){
            const error = {field : 'Id', message : 'El Id no es valido!'}
            this.setError(error) // seteo el error si existe
        }
        
        if(!this.value){
            const error = {field : 'Id', message : 'El Id no existe!'}
            this.setError(error)
        }
    }

    
}
