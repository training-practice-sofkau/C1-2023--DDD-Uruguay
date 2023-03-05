import { ValueObjectBase } from 'src/libs';
export class EdadValueObject extends ValueObjectBase<number> {
   
    constructor(edad? : number ){
        super(edad? edad : 0 );
    }

    validateData(): void {

       this.contenidoEdad();
       this.formatoEdad();

    }
    

    private contenidoEdad():void{

        if(this.value > 120){
        
                const error = {
                    field:"Edad",
                    message: "El campo edad tiene que ser menor a 120"
                }
    
                this.setError( error );
        }
    }

    private formatoEdad() :void {

        if( this.value && !IsNumber(this.value) ){
        
                const error = {
                    field:"Edad",
                    message: "La edad tiene que ser un numero"
                }
    
                this.setError( error );
        }

        if( this.value && !IsPositivo( this.value )){
        
            const error = {
                field: "Edad",
                message: "La edad tiene que ser un numero positivo"
            }

            this.setError( error );
        }

    }
   
}
