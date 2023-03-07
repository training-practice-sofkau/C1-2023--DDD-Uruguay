import { ValueObjectBase } from "src/libs";

export class TotalPriceValueObject extends ValueObjectBase<number>{
    constructor(value?: number) {
        super(value)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateTotal()
        }
    }

    private validateTotal(): void {

        if (this.value && !isNaN(this.value)) {
            const error = {
                field: "Total",
                message: `${this.value} is not a valid number`
            }
            this.setError(error)
        }
    }
}
