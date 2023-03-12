import { IRemoveItemFromWarrantyCommand, IAddItemToWarrantyCommand } from '../../interfaces/commands/invoice/warranty/';
import { WarrantyDomainEntityBase } from '../../entities/invoice/warranty.domain-entity';


export interface IWarrantyDomainService {

    AddItemtoWarranty(data: IAddItemToWarrantyCommand): Promise<boolean>;

    RemoveItemFromWarranty(data: IRemoveItemFromWarrantyCommand): Promise<boolean>;

    ChangeWarrantyStatus(data: WarrantyDomainEntityBase): Promise<boolean>;

}