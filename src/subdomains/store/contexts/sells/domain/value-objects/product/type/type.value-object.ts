import { ValueObjectBase } from "src/libs";

export enum DessertType {
    Icecream = "Icecream",
    IcecreamSandwich = "Icecream Sandwich",
    FrozzenPizza = "Frozzen Pizza"
}

export class ProductTypeValueObject extends ValueObjectBase<DessertType>{

    constructor(value?: DessertType) {
        super(value ? value : DessertType.Icecream)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateDessert()
        }
    }

    private validateDessert() {
        if (!Object.values(DessertType).includes(this.value)) {
            const error = {
                field: "Type",
                message: `We don't serve ${this.value}`
            }
            this.setError(error)
        }
    }
}
