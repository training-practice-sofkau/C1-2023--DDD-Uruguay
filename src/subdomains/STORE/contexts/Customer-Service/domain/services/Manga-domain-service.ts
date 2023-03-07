import { MangaDomainBase } from '../entities/Order-domain/manga-domain-entity';
export interface MangaDomainService 
 < T extends MangaDomainBase = MangaDomainBase >   {

    UpdateName (idmanga: string,name: string):   Promise<T>;
    UpdateState(idmanga: string,state: number): Promise<T>;
    UpdatePrice(idmanga: string,Price: number): Promise<T>;


}
