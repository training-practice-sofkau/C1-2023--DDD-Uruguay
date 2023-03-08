import { IAddItemToWarrantyCommand } from '../../interfaces/commands/invoice/warranty/add-item-to-warranty.command';
import { IRemoveItemFromWarrantyCommand } from '../../interfaces/commands/invoice/warranty/remove-item-from-warranty.command';
import { IChangeWarrantyStatusCommand } from '../../interfaces/commands/invoice/warranty/change-warranty-status.command';
export interface IWarrantyDomainService {

    AddItemtoWarranty(data: IAddItemToWarrantyCommand): Promise<boolean>;

    RemoveItemFromWarranty(data: IRemoveItemFromWarrantyCommand): Promise<boolean>;

    ChangeWarrantyStatus(data: IChangeWarrantyStatusCommand): Promise<boolean>;

}