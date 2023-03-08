import { ValueObjectBase } from "src/libs/sofka/bases/object-value.base";
import { isState } from "src/libs/validations/is-State-validations"


export class MangaSateValue extends ValueObjectBase<string>{
/**
 * The constructor function is a special function that is called when an object is created from a
 * class.
 * @param {string} [value] - The value of the input.
 */
   
  constructor(value?: string){
      super(value);
  }

/**
 * If the structure of the data is valid, then validate the data.
 */

  validateData(): void {
  this.validateStructure()
  }

/* Validating the structure of the data. */

private validateStructure(): void {
    
    if(this.value && !isState(this.value) === false)
{
    const error = {
      field: 'State',
      message: 'El dato ingresado en "State" no contiene una estructura valida '
    }
    this.setError(error)
  }
  

}
}