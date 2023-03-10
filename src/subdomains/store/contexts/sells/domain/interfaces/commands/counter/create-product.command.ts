import { Flavour, DessertType } from "../../../value-objects"


export interface ICounterCreateProductCommand{
    productId?: string
    type: DessertType
    flavour: Flavour
    price: number
    stock: number
    expirationDate: Date
}