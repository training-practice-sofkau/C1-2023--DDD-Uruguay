import { IsString } from "class-validator";
import { IGetProductCommand } from "src/subdomains/store/contexts";

export class GetProductCommand implements IGetProductCommand {
    @IsString()
    productId: string
}