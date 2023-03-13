import {  ValueObjectBase } from 'src/libs';


export class TerminosACumplirValueObject extends ValueObjectBase<string> {
   
   constructor( value? : string ){
    super(value ? value : "" );
   }

    validateData(): void {
        this.contenidoTerminos();
    }

    contenidoTerminos(): void {

        if(this.value.length > 2000){
            const error = {
                field: "Terminos",
                message:"Los terminos no puede superar los 2000 caracteres "
            }
            this.setError(error);
        }

    }
     
  
}


