import { IsNumber, IsString } from "class-validator"
import { IPosterUpdateImageCommand } from "../../../../../domain/interfaces/commands/counter/poster/update-image.command"

export class PosterUpdateImageCommand implements IPosterUpdateImageCommand{
    @IsString()
    posterId: string
    @IsString()
    type: string
    @IsString()
    flavour: string
    @IsNumber()
    price: number
    @IsNumber()
    stock: number
    @IsString()
    image: string
}