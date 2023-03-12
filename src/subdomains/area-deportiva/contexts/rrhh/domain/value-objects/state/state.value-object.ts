import { ValueObjectBase } from "src/libs";

export class StateValueObject extends ValueObjectBase<boolean> {
   
    constructor( value? : boolean ){
     super(value ? value : false );
    }
 
     validateData(): void {
         this.contenidoTerminos();
     }
 
     contenidoTerminos(): void {
 
         if(this.value !== false && this.value !== true){
             const error = {
                 field: "State",
                 message:"El state es incorrecto , debe ser False o True"
             }
             this.setError(error);
         }
 
     }
}
