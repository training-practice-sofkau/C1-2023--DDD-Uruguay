import { DessertType } from "../../../../value-objects"

export interface IProductUpdateTypeCommand{
    productId: string
    type: DessertType
    flavour: string
    price: number
    stock: number
    image: string
}