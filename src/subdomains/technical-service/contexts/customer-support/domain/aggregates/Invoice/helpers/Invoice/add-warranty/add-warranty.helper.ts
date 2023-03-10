
import { IWarrantyDomainEntity } from '../../../../../entities/interfaces';
import { WarrantyAddedEventPublisherBase } from '../../../../../events/publishers';
import { IInvoiceDomainService } from '../../../../../services/invoice';

export const AddWarranty = async (
    warrantyData: IWarrantyDomainEntity,
    invoiceService: IInvoiceDomainService,
    warrantyAddedEventPublisherBase: WarrantyAddedEventPublisherBase
): Promise<IWarrantyDomainEntity | null> => {

    const result = await invoiceService.AddWarranty(warrantyData);
    warrantyAddedEventPublisherBase.response = result;
    warrantyAddedEventPublisherBase.publish();

    return result;
}