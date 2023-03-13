import { BillDomain } from '../entities/Sale-domain/bill-domain-entity';
import { MangaDomainBase } from '../entities/Order-domain/manga-domain-entity';
import { UpdatePaymentMethod } from '../interfaces/commands/Sale-commands/Bill-Comands/update-payment-method-command';
import { IGetMangaData } from '../interfaces/commands/Sale-commands/Bill-Comands/get-manga-data-command';
import { IUpdateTotal } from '../interfaces/commands/Sale-commands/Bill-Comands/update-total-command';
export interface BillDomainService  < T extends BillDomain = BillDomain >  {

    UpdatePaymentMethod(data:T ):   Promise<T>;
    UpdateTotal(data:IUpdateTotal): Promise<T>;
    getMangaData(data: IGetMangaData): Promise<MangaDomainBase>;

}
