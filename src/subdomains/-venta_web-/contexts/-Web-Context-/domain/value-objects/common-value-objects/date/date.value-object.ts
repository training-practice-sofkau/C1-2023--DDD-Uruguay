
import { ValueObjectBase } from "src/libs/sofka/bases";
import { isDateOk } from "src/libs/validations/date-validation";

export class DateValueObject extends ValueObjectBase<number> {
    
    constructor(value?: number) {
        super(value ? value : null)
    }
    
    validateData(): void {
        this.isDateValid()
    }

    private isDateValid() : void{

        if (this.value && isDateOk) {
            const error = {field: 'Date', message: 'La fecha no es un formato correcto!'};

            this.setError(error);
        }

    }

}
