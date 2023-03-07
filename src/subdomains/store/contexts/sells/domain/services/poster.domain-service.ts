import { PosterDomainEntity } from "../entities"
import { IPosterUpdateImageCommand, IPosterUpdatePriceCommand } from "../interfaces"

export interface IPosterDomainService {
    updateImage(poster: IPosterUpdateImageCommand, newImage: string): Promise<PosterDomainEntity>
    updatePosterPrice(poster: IPosterUpdatePriceCommand, newPrice: number): Promise<PosterDomainEntity>
}