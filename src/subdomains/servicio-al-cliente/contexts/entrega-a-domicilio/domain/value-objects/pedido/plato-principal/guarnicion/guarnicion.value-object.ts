import { EsGuarnicionValida } from '../../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface';


export class GuarnicionValueObject extends ValueObjectBase<string> {

    constructor(value: string) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof GuarnicionValueObject
     */
    validateData(): void {
        this.validarGuarnicion();
    }

    /**
     *Funsión que valida la estructura de una dirección
     *
     * @private
     * @memberof GuarnicionValueObject
     */
    private validarGuarnicion(): void {
        if(EsGuarnicionValida(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Guarnicion',
                message: 'El valor no es una guarnición válida'
            };

            this.setError(error);
        }
    }
    
}