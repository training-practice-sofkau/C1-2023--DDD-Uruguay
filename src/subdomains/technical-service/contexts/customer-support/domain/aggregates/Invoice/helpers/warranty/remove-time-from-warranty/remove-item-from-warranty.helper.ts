import { IWarrantyDomainService } from '../../../../services';
import { IRemoveItemFromWarrantyCommand } from '../../../../interfaces/commands/invoice/warranty';
import { ItemRemovedFromWarrantyEventPublisherBase } from '../../../../events/publishers/warranty';


export const RemoveItemFromWarranty = async (
    data: IRemoveItemFromWarrantyCommand,
    warrantyService: IWarrantyDomainService,
    itemRemovedFromWarrantyEventPublisherBase: ItemRemovedFromWarrantyEventPublisherBase
): Promise<boolean> => {

    const result = await warrantyService.RemoveItemFromWarranty(data);
    itemRemovedFromWarrantyEventPublisherBase.response = result;
    itemRemovedFromWarrantyEventPublisherBase.publish();

    return result;
}
