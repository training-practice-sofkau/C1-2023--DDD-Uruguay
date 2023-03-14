import { IPosterUpdateImageCommand, IPosterUpdatePriceCommand } from "../interfaces"
import { IPosterUpdateTypeCommand } from "../interfaces/commands/counter/poster/update-type.command"
import { PosterMySqlEntity } from '../../infrastructure/persistence/databases/mysql/entities/poster.entity';

export interface IPosterDomainService<T extends PosterMySqlEntity = PosterMySqlEntity> {
    updateImage(poster: IPosterUpdateImageCommand): Promise<T>
    updatePosterPrice(poster: IPosterUpdatePriceCommand): Promise<T>
    updatePosterType(poster: IPosterUpdateTypeCommand): Promise<T>
}