import { PosterDomainEntity } from "../../../../entities"

export interface IPosterUpdatePriceCommand{
    poster: PosterDomainEntity
    newPrice: string
}