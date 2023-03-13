import { MangaDomainBase } from 'src/subdomains/Store/contexts/Customer-Service/domain/entities';
import { IUpdateTotal, IGetMangaData } from 'src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands';
import { BillDomainService } from '../../../../../domain/services/Bill-domain-service';
import { BillEntityDB } from '../entities/Bill-entity';
export class BillMySqlService implements BillDomainService<BillEntityDB> {
    UpdatePaymentMethod(data: BillEntityDB): Promise<BillEntityDB> {
        throw new Error('Method not implemented.');
    }
    UpdateTotal(data: IUpdateTotal): Promise<BillEntityDB> {
        throw new Error('Method not implemented.');
    }
    getMangaData(data: IGetMangaData): Promise<MangaDomainBase> {
        throw new Error('Method not implemented.');
    }
}
