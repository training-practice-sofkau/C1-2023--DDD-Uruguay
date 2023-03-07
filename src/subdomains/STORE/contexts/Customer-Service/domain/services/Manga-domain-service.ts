import { MangaDomainBase } from '../entities/Order-domain/manga-domain-entity';
import { UpdateNameManga } from '../interfaces/commands/Order-commands/Manga-Commands/update-name-command';
import { UpdateStateManga } from '../interfaces/commands/Order-commands/Manga-Commands/update-state-command';
import { UpdatePriceManga } from '../interfaces/commands/Order-commands/Manga-Commands/update-price-command';
export interface MangaDomainService 
 < T extends MangaDomainBase = MangaDomainBase >   {

    UpdateName (data: UpdateNameManga): Promise<T>;
    UpdateState(data: UpdateStateManga): Promise<T>;
    UpdatePrice(data: UpdatePriceManga): Promise<T>;

}
