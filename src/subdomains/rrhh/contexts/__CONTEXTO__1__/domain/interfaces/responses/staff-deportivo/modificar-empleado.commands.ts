import { CostoValueObject } from '../../../value-objects/costo/costo.value-object';

export interface ISalarioEmpleadoModificadoResponse {
    success: boolean;
    data: CostoValueObject | null;
}
