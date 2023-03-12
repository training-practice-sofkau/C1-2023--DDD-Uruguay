import { ValueObjectBase } from "src/libs";

export class FechaValueObject extends ValueObjectBase<string> {
    
    constructor(fecha? : string){
        super(fecha? fecha: "");
    }

    validateData(): void {
        this.formatoFecha();
    }

    private formatoFecha():void{

        if(this.value && !IsFecha(this.value)){
            const error = {
                field:"Fecha",
                message: "La fecha no corresponde a un formato correcto"
            }
            this.setError(error);
        }
    }

}
