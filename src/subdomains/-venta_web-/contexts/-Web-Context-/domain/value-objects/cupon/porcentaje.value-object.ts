import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";

export class PorcentajeValueObject extends ValueObjectBase<number>{

    constructor(value? : number){
        super(value ? value : null)
    }
    
    validateData(): void {
        this.porcentajeIsOk();
    }

    private porcentajeIsOk() : void {

        //Valido la existencia del valorr
        if (this.value) {
            const error = { field: 'Porcentaje', message: 'El valor no existe!'};

            this.setError(error);
        }

        //Valido que el valor sea positivo
        if (this.value < 0) {
            const error = { field: 'Porcentaje', message: 'El porcentaje no puede ser menor a cero!'};

            this.setError(error);
        }


    }

}
