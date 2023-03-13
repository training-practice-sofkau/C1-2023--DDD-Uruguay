import { Flavour, ImgType } from "../../../value-objects";

export interface ICounterCreatePosterCommand{
    posterId: string
    type: ImgType
    flavour: Flavour
    price: number
    stock: number
    image: string
}