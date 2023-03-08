import { EsVehiculo } from '../../../../../../../../../libs/validations';
import { ValueObjectBase } from '../../../../../../../../../libs/sofka/bases';
import { IErrorValueObject } from '../../../../../../../../../libs/sofka/interface';


export class VehiculoValueObject extends ValueObjectBase<string> {

    constructor(value: string) {
        super(value);
    }
    
    /**
     *Funsión que realiza todas las validaciones
     *
     * @memberof VehiculoValueObject
     */
    validateData(): void {
        this.validarVehiculo();
    }

    /**
     *Funsión que valida la validez de un vehículo
     *
     * @private
     * @memberof VehiculoValueObject
     */
    private validarVehiculo(): void {
        if(EsVehiculo(this.value) === false) {

            const error: IErrorValueObject = {
                field: 'Vehiculo',
                message: 'El vehículo no es válido'
            };

            this.setError(error);
        }
    }

}