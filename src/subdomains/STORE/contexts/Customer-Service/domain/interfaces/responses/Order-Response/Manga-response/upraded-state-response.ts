import { MangaDomainBase } from "../../../../entities/Order-domain/manga-domain-entity";

export class UpradedStateResponse {
    succes: boolean;
    data: MangaDomainBase | null 
}
