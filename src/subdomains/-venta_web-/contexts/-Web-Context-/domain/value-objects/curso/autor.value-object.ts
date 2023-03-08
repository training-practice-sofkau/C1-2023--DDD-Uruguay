import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";
import { isFullNameOK } from "src/libs/validations/fullname-validation";
import { largoMaximo } from "src/libs/validations/largo-maximo-validation";
import { largoMinimo } from "src/libs/validations/largo-minimo-validation";

export class AutorValueObject extends ValueObjectBase<string> {
    
    
    constructor(value? : string){
        super(value ? value : null)
    }

    validateData(): void {
        this.validatFullNameLargo(),
        this.validatFullNameStructura();
    }


    private validatFullNameLargo() : void {
        
        //Existe el dato nombre completo?
        if (this.value) {
            const error = {
                field: 'Fullname',
                message: 'El nombre no se proporcionó!'
            };

            this.setError(error);
        }

        //Comprobar que el largo no se exeda
        if(largoMaximo(this.value, 80)){
            const error = {field: 'Fullname', message: 'El nombre proporcionado es demasiado largo!'};

            this.setError(error);
        }

        //Compruebo que el largo no sea menor a 7 caracteres
        if(largoMinimo(this.value, 7)){
            const error = {field: 'Fullname', message: 'El nombre proporcionado es demasiado corto!'};

            this.setError(error);
        }

    }


    private validatFullNameStructura() : void {
        
        //Valido si la estructura proporcionada es correcta
        if (this.value && isFullNameOK(this.value)) {
            const error = {field: 'Fullname', message: 'No es un nombre valido!'};

            this.setError(error);
        }
 

    }


}
