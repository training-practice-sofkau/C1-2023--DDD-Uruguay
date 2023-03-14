import { IsNumber, IsString } from "class-validator"
import { IProductUpdateStockCommand } from "src/subdomains/store/contexts/sells/domain"

export class ProductUpdateStockCommand implements IProductUpdateStockCommand{
    @IsString()
    productId: string
    @IsNumber()
    stock: number
}