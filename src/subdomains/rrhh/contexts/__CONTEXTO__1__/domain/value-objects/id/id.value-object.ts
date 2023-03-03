import { ValueObjectBase } from 'src/libs';
import { IsUUID } from 'src/libs/sofka/validation/uuid-validation';
import { uuid } from 'uuidv4';
export class IdValueObject extends ValueObjectBase<string> {
    

    constructor(value? : string ){
        super(value? value: uuid())
    }
    

    validateData(): void {
       this.validarId();
    }

    private validarId():void{
        if(this.value && !IsUUID(this.value)){
            
            const error = {
                field: "Identificador",
                message: "El identificador no tiene la estructura corresponiente a un UUIDV4"
            }
            this.setError(error);
        }

    }
}
