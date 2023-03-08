import { ValueObjectBase } from "src/libs"

enum TicketType {
    SELL = "Sell",
    CreditNote = "Credit Note"
}

export class TicketTypeValueObject extends ValueObjectBase<TicketType>{

    constructor(value?: TicketType) {
        super(value ? value : TicketType.SELL)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateDessert()
        }
    }

    private validateDessert() {
        if (!Object.values(TicketType).includes(this.value)) {
            const error = {
                field: "Type",
                message: `${this.value} is not a valid Ticket Type`
            }
            this.setError(error)
        }
    }
}