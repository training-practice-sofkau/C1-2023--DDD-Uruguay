import { ImgType } from '../../../../value-objects/poster/type/type.value-object';

export interface IPosterUpdateTypeCommand{
    posterId: string
    type: ImgType
    flavour: string
    price: number
    stock: number
    image: string
}