import { IsDate, IsNumber, IsString } from 'class-validator';
import { DessertType, Flavour, ICounterCreateProductCommand } from "src/subdomains/store/contexts";

export class CounterCreateProductCommand implements ICounterCreateProductCommand {
    @IsString()
    productId: string
    //Validations (?)
    type: DessertType
    //Validations (?)
    flavour: Flavour
    @IsNumber()
    price: number
    @IsNumber()
    stock: number
    @IsDate()
    expirationDate: Date
}