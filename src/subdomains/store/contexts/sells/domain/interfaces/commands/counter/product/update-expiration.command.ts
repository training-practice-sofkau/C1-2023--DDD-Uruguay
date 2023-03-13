
export interface IProductUpdateExpirationCommand{
    productId: string
    type: string
    flavour: string
    price: number
    stock: number
    expirationDate: Date
}