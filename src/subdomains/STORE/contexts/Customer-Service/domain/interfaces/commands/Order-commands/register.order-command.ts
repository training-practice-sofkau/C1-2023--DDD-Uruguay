import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity";
import { MangaDomainBase } from "../../../entities/Order-domain/manga-domain-entity";

export interface IRegisterOrder {    
    client: ClientDomainBase;
    Manga: MangaDomainBase;
    idOrder: string 
}
