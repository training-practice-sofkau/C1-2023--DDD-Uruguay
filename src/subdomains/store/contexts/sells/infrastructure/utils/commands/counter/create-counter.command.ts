import { IsString } from "class-validator";
import { ICounterCreateCounterCommand } from "src/subdomains/store/contexts";

export class CounterCreateCounterCommand implements ICounterCreateCounterCommand{
    @IsString()
    counterId: string
    @IsString()
    productId: string
    @IsString()
    posterId: string
}