import { IsNumber, isNumber, IsString } from 'class-validator'
import { IPosterUpdateTypeCommand } from 'src/subdomains/store/contexts/sells/domain/interfaces'
import { ImgType } from 'src/subdomains/store/contexts/sells/domain/value-objects'

export class PosterUpdateTypeCommand implements IPosterUpdateTypeCommand{
    @IsString()
    posterId: string
    // Validacion (?)
    type: ImgType
    @IsString()
    flavour: string
    @IsNumber()
    price: number
    @IsNumber()
    stock: number
    @IsString()
    image: string
}