import { ValueObjectBase } from "src/libs/sofka/bases";

export class CostoValueObject extends ValueObjectBase<number>{
    

    constructor(value? : number){
        super(value ? value : null)
    }
    
    
    validateData(): void {
       
    }


    private valorPositivo() : void {

        //Valido la existencia de un valor
        if (this.value) {
            const error = { field: 'Costo', message: 'El costo esta vacio!'};

            this.setError(error);
        }

        //Valido que el valor sea positivo
        if (this.value < 0) {
            const error = { field: 'Costo', message: 'El costo no puede ser menor a cero!'};

            this.setError(error);
        }


    }
}
