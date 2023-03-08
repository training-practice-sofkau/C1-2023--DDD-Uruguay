import { ValueObjectBase } from "src/libs";

enum ImgType{
    URL = "URL",
    JPG = "JPG"
}

export class PosterTypeValueObject extends ValueObjectBase<ImgType>{
    constructor(value?: ImgType) {
        super(value ? value : ImgType.URL)
    }

    validateData(): void {
        if (!this.hasErrors()) {
            this.validateImgType()
        }
    }

    private validateImgType(): void {
        if (!Object.values(ImgType).includes(this.value)) {
            const error = {
                field: "Image",
                message: `${this.value} is not a valid Img Type`
            }
            this.setError(error)
        }
    }
}
