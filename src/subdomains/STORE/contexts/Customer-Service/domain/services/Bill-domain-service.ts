import { BillDomain } from '../entities/Sale-domain/bill-domain-entity';
import { MangaDomainBase } from '../entities/Order-domain/manga-domain-entity';
export interface BillDomainService  < T extends BillDomain = BillDomain >  {

    UpdatePaymentMethod(IdBill: string, PaymentMethod: string):   Promise<T>;
    UpdateTotal(IdBill: string,total: number): Promise<T>;
    getMangaData(idManga: string): Promise<MangaDomainBase>;

}
