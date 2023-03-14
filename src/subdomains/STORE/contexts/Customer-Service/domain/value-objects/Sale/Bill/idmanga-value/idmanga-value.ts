import { v4 as uuid } from "uuid";

import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";

import { IsUuid } from "src/libs/validations/is-uuid.validations";

export class IdmangaValuee extends ValueObjectBase<string>{
  
 /**
  * The constructor function takes an optional string parameter and if it's not provided, it generates
  * a new UUID and passes it to the base class constructor
  * @param {string} [value] - The value of the id. If not provided, a random uuid will be generated.
  */
  constructor(value?: string){
    super(value? value: uuid());

  }
/**
 * It validates the structure of the data.
 */

  validateData(): void {
this.validateStructure()
  }

/**
 * If the value is not null and the value is not a valid UUID, then set an error
 */
private validateStructure(): void {
  
    if(this.value && !IsUuid(this.value) === false)
{
    const error = {
      field: 'UsuarioId',
      message: 'El id no contiene una estructura valida '
    }
    this.setError(error)
  }
  

}
}