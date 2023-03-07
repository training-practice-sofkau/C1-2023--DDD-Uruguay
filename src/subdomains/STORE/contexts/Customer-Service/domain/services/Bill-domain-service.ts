import { BillDomain } from '../entities/Sale-domain/bill-domain-entity';
import { MangaDomainBase } from '../entities/Order-domain/manga-domain-entity';
export interface BillDomainService  < T extends BillDomain = BillDomain >  {

    UpdatePaymentMethod(PaymentMethod: string):   Promise<T>;
    UpdateTotal(total: number): Promise<T>;
    getMangaData(idManga: number): Promise<MangaDomainBase>;

}
