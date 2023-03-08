import { ValueObjectBase } from "src/libs";

export class TipoNegociacionValueObject  extends ValueObjectBase<string>{
    validateData(): void {
        this.validacionTipoNegociacion();   
    }

    private validacionTipoNegociacion():void{

        if(this.value && !IsTypeNegociacion(this.value)){
            
            const error = {
                field:"Negociacion",
                message: "El tipo de negociacion es  invalida ,debe estar dentro de los posibles"
            }

            this.setError( error );
        }
    }
}
