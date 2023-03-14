import { IErrorValueObject, ValueObjectBase } from "src/libs";
import { PositionEnum } from "./positions.enum";

export class PositionValueObject extends ValueObjectBase<PositionEnum> {
    validateData(): void {
        this.checkEnumValid();
    }

    private checkEnumValid() {
        if(!(this.value === PositionEnum.Goalkeeper ||this.value === PositionEnum.Defender ||
            this.value === PositionEnum.Midfilder || this.value === PositionEnum.Striker)) {
                const error: IErrorValueObject = {
                    field: 'Position',
                    message: 'This value is not part of Position Enum'
                }

                this.setError(error);
            }
    }

}
