import { NombreValueObject } from '../../../value-objects/nombre/nombre.value-object';

export interface ModificarNombreCommands {
    nombre: string | NombreValueObject
}
