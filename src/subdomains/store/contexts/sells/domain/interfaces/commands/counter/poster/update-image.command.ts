import { PosterDomainEntity } from "../../../../entities"

export interface IPosterUpdateImageCommand{
    poster: PosterDomainEntity
    newImage: string
}