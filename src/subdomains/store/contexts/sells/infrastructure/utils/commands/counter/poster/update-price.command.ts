import { IPosterUpdatePriceCommand } from "src/subdomains/store/contexts/sells/domain/interfaces"
import { IsNumber, IsString } from 'class-validator';

export class PosterUpdatePriceCommand implements IPosterUpdatePriceCommand{
    @IsString()
    posterId: string
    @IsNumber()
    newPrice: number
}