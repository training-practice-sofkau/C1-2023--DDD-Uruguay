import { ItemAddedToWarrantyEventPublisherBase } from '../../../../events/publishers/warranty';
import { IAddItemToWarrantyCommand } from '../../../../interfaces/commands/invoice/warranty';
import { IWarrantyDomainService } from '../../../../services';


export const AddItemToWarranty = async (
    data: IAddItemToWarrantyCommand,
    warrantyService: IWarrantyDomainService,
    itemAddedToWarrantyEventPublisherBase: ItemAddedToWarrantyEventPublisherBase
): Promise<boolean> => {

    const result = await warrantyService.AddItemtoWarranty(data);
    itemAddedToWarrantyEventPublisherBase.response = result;
    itemAddedToWarrantyEventPublisherBase.publish();

    return result;
}
