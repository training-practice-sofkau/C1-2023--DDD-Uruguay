import { ValueObjectBase } from "src/libs/sofka/bases";
import { IsEmailOk } from "src/libs/validations/email-validation";
import { largoMaximo } from "src/libs/validations/largo-maximo-validation";
import { largoMinimo } from "src/libs/validations/largo-minimo-validation";

export class EmailValueObject extends ValueObjectBase<string>{
    
    constructor(value? : string){
        super(value ? value : null)
    }
     
    validateData(): void {
        this.validateEmail()
    }

    private validateEmail() : void {
        
        //Valido la estructura del email
        if (this.value && IsEmailOk(this.value)) {
            const error = {field: 'Email', message: 'El Email no es valido!'};

            this.setError(error);
        }


         //Valido que el valor no este por denajo del largo minimop
        if (largoMinimo(this.value, 20)) {
            const error = { field: 'Email', message: 'El Email proporcionado es demasiado corto!'};

            this.setError(error);
        }

        //Valido que el largo no se exeda
        if(largoMaximo(this.value, 40)){
            const error = {field: 'Email', message: 'El Email proporcionado es demasiado largo!'};

            this.setError(error);
        }
    

    }


}
