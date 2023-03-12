import { ValueObjectBase } from "src/libs";

export class NacionalidadValueObject extends ValueObjectBase<string>{


    constructor(value? : string ){
        super(value? value: "");
    }

    validateData(): void {
        this.formatoNacionalidad();
    }

    private formatoNacionalidad():void{

        if(this.value && !IsNacionalidad(this.value)){
            
                const error = {
                    field:"Nacionalidad",
                    message: "La Nacionalidad invalida ,debe estar dentro de las posibles"
                }
    
                this.setError( error );
        
        }
    }
   
}
