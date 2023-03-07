import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";
import { largoMaximo } from "src/libs/validations/largo-maximo-validation";
import { largoMinimo } from "src/libs/validations/largo-minimo-validation";
import { isphoneOk } from "src/libs/validations/phone-validation";

export class PhoneValueObject extends ValueObjectBase<string>{
    
    constructor(value? : string){
        super(value ? value : null)
    }
    

    validateData(): void {
        this.isphoneOk();
    }


    private isphoneOk() : void {

        //Valido si el valor existe
        if (this.value) {
            const error = { field: 'Phone', message: 'El dato no existe!'};

            this.setError(error);
        }

        //Valido el largo minimo de un telefono
        if (largoMinimo(this.value, 12)) {
            const error = { field: 'Phone', message: 'El telefono proporcionado es demasiado corto!'};

            this.setError(error);
        }

        //Comprobar que el largo no se exeda
        if(largoMaximo(this.value, 12)){
            const error = {field: 'Phone', message: 'El telefono proporcionado es demasiado largo!'};

            this.setError(error);
        }

        //Comprobar que el largo no se exeda
        if(this.value && isphoneOk(this.value)){
            const error = {field: 'Phone', message: 'El telefono no es valido!'};

            this.setError(error);
        }
      
    }
    
}
