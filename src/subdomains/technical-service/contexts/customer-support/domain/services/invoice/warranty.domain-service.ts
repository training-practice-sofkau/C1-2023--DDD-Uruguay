import { WarrantyDomainEntityBase } from '../../entities/invoice/warranty.domain-entity';


export interface IWarrantyDomainService {    

    ChangeWarrantyEndDate(data: WarrantyDomainEntityBase): Promise<boolean>;

    ChangeWarrantyStatus(data: WarrantyDomainEntityBase): Promise<boolean>;

}