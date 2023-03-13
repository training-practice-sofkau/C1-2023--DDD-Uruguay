import { ValueObjectBase } from "src/libs"

export enum Flavour {
    Vanilla = "Vanilla",
    Chocolate = "Chocolate",
    Strawberry = "Strawberry"
}

export class FlavourValueObject extends ValueObjectBase<Flavour> {
    constructor(value?: Flavour) {
        super(value ? value : Flavour.Vanilla)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateFlavour()
        }
    }

    private validateFlavour(): void {
        if (!Object.values(Flavour).includes(this.value)) {
            const error = {
                field: "Flavour",
                message: `${this.value} is not a valid flavour`
            }
            this.setError(error)
        }
    }
}
