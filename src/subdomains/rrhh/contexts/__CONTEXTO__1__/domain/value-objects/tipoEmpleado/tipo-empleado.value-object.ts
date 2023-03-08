import {  ValueObjectBase } from 'src/libs';
import { uuid } from 'uuidv4';

export class TipoEmpleadoValueObject extends ValueObjectBase<string> {
    
    constructor(value? :string){
        super(value? value: "");
    }

    validateData() : void {
        this.validacionTypeEmpleado();
    }

    private validacionTypeEmpleado() : void {

        if(this.value && !IsTypeEmpleado(this.value)){
            const error = {
                field: "Empleado",
                message: "El tipo de empleado es incorrecto"
            }
            this.setError(error);
        }
    }
    private validacionEmpleado():void{
        if(this.value && !IsString(this.value)){
            const error = {
                field: "Empleado",
                message: "El dato debe ser de tipo string "
            }
            this.setError(error);
        }
    }
    
   
}
