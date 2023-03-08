import { ValueObjectBase } from "src/libs";

export class QuantityValueObject extends ValueObjectBase<number>{
    constructor(value?: number) {
        super(value)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateQuantity()
        }
    }

    private validateQuantity(): void {

        if (this.value && !isNaN(this.value)) {
            const error = {
                field: "Quantity",
                message: `${this.value} is not a valid number`
            }
            this.setError(error)
        }

        if (this.value <= 0) {
            const error = {
                field: "Quantity",
                message: `${this.value} is not a valid quantity, it has to be at least 1`
            }
            this.setError(error)
        }
    }
}
