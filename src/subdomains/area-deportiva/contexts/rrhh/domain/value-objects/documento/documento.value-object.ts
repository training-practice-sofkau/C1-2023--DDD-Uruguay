import { ValueObjectBase } from 'src/libs';

export class DocumentoValueObject extends ValueObjectBase<string> {
    
    constructor(documento? : string){
        super(documento? documento: "");
    }
    
    validateData(): void {
       this.formatoDocumento();
       this.contenidoDocumento();
    }

    private contenidoDocumento():void{
        
        if(this.value.length >9){
            const error = {
                field:"Documento",
                message: "El documento contiene mas de 9 numeros"
            }

            this.setError(error);
        }

        if(this.value.length <9){
            const error = {
                field:"Documento",
                message: "El documento contiene menos de 9 numeros"
            }
            this.setError(error);
        }
    }

    private formatoDocumento():void{

        if(this.value && !IsDocument(this.value)){
            const error = {
                field:"Documento",
                message: "El documento no corresponde a un formato CI"
            }
            this.setError(error);
        }
    }

}
