import { IsString, IsNumber } from 'class-validator';
import { ImgType, Flavour, ICounterCreatePosterCommand } from "src/subdomains/store/contexts"

export class CounterCreatePosterCommand implements ICounterCreatePosterCommand {
    @IsString()
    posterId: string
    // Validations (?)
    type: ImgType
    // Validations (?)
    flavour: Flavour
    @IsNumber()
    price: number
    @IsNumber()
    stock: number
    @IsString()
    image: string
}