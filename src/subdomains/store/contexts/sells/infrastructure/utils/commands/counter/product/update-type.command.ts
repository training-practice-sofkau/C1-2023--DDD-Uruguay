import { IsString, IsNumber } from 'class-validator';
import { DessertType, IProductUpdateTypeCommand } from "src/subdomains/store/contexts/sells/domain"

export class ProductUpdateTypeCommand implements IProductUpdateTypeCommand {
    @IsString()
    productId: string
    // validacion (?)
    type: DessertType
    @IsString()
    flavour: string
    @IsNumber()
    price: number
    @IsNumber()
    stock: number
    @IsString()
    image: string
}