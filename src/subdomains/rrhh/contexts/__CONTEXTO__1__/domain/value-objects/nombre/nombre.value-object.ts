import { ValueObjectBase } from "src/libs";
import { IsFullName } from "src/libs/validation/is-nombre.validation";

export class NombreValueObject extends ValueObjectBase<string>{

    constructor(value?: string) {
        super(value ? value : "");
    }

    validateData(): void {
        this.contenidoOfFullName();
        this.formatoFullName();
    }

    private formatoFullName(){

        if(this.value && !IsFullName(this.value)){
            const error = {
                field: "fullName",
                message: "El formato del nombre es invalido"
            }
            this.setError(error);
        }
    }

    private contenidoOfFullName() {

        if (this.value === "") {
            const error = {
                field: "fullName",
                message: "El nombre no puede estar vacio",
            }
            this.setError(error);
        }

        if(this.value.length > 200){
           
            const error = {
                field: "fullName",
                message: "El nombre es muy extenso",
            }
            this.setError(error);
        }

        if(this.value.length < 4){
           
            const error = {
                field: "fullName",
                message: "El nombre es muy corto",
            }
            this.setError(error);
        }
    }



}
