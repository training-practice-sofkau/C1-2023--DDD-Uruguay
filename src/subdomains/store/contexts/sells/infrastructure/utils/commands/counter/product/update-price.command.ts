import { IProductUpdatePriceCommand } from "src/subdomains"
import { IsNumber, IsString } from 'class-validator'

export class ProductUpdatePriceCommand implements IProductUpdatePriceCommand {
    @IsString()
    productId: string
    @IsNumber()
    newPrice: number
}