import { ValueObjectBase } from "src/libs";

export class SalaryValueObject extends ValueObjectBase<number>{
    constructor(value?: number) {
        super(value)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateSalary()
        }
    }

    private validateSalary(): void {
        if (this.value && !isNaN(this.value)) {
            const error = {
                field: "Salary",
                message: `${this.value} is not a valid number`
            }
            this.setError(error)
        }
    }

    private validatePositive(): void {
        if (this.value < 0) {
            const error = {
                field: "Salary",
                message: `${this.value} is negative`
            }
            this.setError(error)
        }
    }
}
