import { CostoValueObject } from '../../../value-objects/costo/costo.value-object';

export interface SalarioEmpleadoModificadoResponse {
    success: boolean;
    data: CostoValueObject | null;
}
