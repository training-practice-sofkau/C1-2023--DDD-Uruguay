
import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";
import { isNumber } from "src/libs/validations";

import { isDate  } from "src/libs/validations/is-date.validations"

export class DateValue extends ValueObjectBase<number>{
  
 /**
  * The constructor function takes an optional string parameter and if it's not provided, it generates
  * a new UUID and passes it to the base class constructor
  * @param {string} [value] - The value of the id. If not provided, a random uuid will be generated.
  */
  constructor(value?: number){
    super(value);

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
  
    if(this.value && !isNumber(this.value) === false)
{
    const error = {
      field: 'Date',
      message: 'El dato ingresado en "Date" no contiene una estructura válida.'
    }
    this.setError(error)
  }
  

}
}