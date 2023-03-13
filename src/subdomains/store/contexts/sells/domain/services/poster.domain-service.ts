import { PosterDomainEntity } from "../entities"
import { IPosterUpdateImageCommand, IPosterUpdatePriceCommand } from "../interfaces"
import { IPosterUpdateTypeCommand } from "../interfaces/commands/counter/poster/update-type.command"

export interface IPosterDomainService {
    updateImage(poster: IPosterUpdateImageCommand): Promise<PosterDomainEntity>
    updatePosterPrice(poster: IPosterUpdatePriceCommand): Promise<PosterDomainEntity>
    updatePosterType(poster: IPosterUpdateTypeCommand): Promise<PosterDomainEntity>
}