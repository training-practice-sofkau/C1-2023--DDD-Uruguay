import { IInvoiceDomainService } from '../../../../services/invoice/invoice.domain-service';
import { WarrantyAddedEventPublisherBase } from '../../../../events/publishers/invoice/warranty-added.event-publisher';
import { IAddWarrantyCommand } from '../../../../interfaces/commands/invoice/add-warranty.command';

export const AddWarranty = async (
    warrantyData: IAddWarrantyCommand,
    invoiceService: IInvoiceDomainService,
    warrantyAddedEventPublisherBase: WarrantyAddedEventPublisherBase
): Promise<boolean> => {

    const result = await invoiceService.AddWarranty(warrantyData);
    warrantyAddedEventPublisherBase.response = result;
    warrantyAddedEventPublisherBase.publish();

    return result;
}