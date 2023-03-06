import { ClientDomainBase } from "../../../entities/Order-domain/client-domain-entity";
import { MangaDomainBase } from "../../../entities/Order-domain/manga-domain-entity";

export class RegisterOrder {    
    client: ClientDomainBase;
    Manga: MangaDomainBase;
}
