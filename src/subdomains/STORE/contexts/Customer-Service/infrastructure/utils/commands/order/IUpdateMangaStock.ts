import { IUpdateMangaStock } from "../../../../domain/interfaces/commands";
import { IsUUID } from 'class-validator';

export class IUpdateMangaStockCommand implements IUpdateMangaStock {

    @IsUUID()
    MangaId: string;
    MangaStock: number;
}
