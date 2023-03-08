import { ValueObjectBase } from "src/libs";
import { IsUrl } from "src/libs/validations/is-url.validations";

export class ImageValueObject extends ValueObjectBase<string>{
    constructor(value?: string) {
        super(value)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateImage()
        }
    }

    private validateImage(): void {

        if (this.value && !IsUrl(this.value)) {
            const error = {
                field: "Image",
                message: `${this.value} is not a valid url`
            }
            this.setError(error)
        }
    }
}
