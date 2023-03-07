import { InvoiceCostUpdatedEventPublisher } from "../../../../events";
import { IUpdateInvoiceCost } from "../../../../interfaces";
import { ICheckOutDomainService } from "../../../../services";

export const UpdateInvoiceCost = async (
    data: IUpdateInvoiceCost,
    checkOutService: ICheckOutDomainService,
    invoiceCostUpdatedEventPublisher: InvoiceCostUpdatedEventPublisher
): Promise<number | null> => {
    const result = await checkOutService.updateInvoiceCost(data);
    invoiceCostUpdatedEventPublisher.response = result;
    invoiceCostUpdatedEventPublisher.publish();
    return result;
}
