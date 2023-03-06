import { MangaDomainBase } from '../entities/Order-domain/manga-domain-entity';
export interface MangaDomainService 
 < T extends MangaDomainBase = MangaDomainBase >   {

    UpdateName(name: string):   Promise<T>;
    UpdateState(state: number): Promise<T>;
    UpdatePrice(Price: number): Promise<T>;


}
