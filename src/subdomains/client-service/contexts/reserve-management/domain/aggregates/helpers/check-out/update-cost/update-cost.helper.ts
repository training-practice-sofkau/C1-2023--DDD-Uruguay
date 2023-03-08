import { CostUpdatedEventPublisher } from "../../../../events";
import { IUpdateCost } from "../../../../interfaces";
import { IInvoiceDomainService } from "../../../../services";

export const UpdateCost = async (
    data: IUpdateCost,
    invoiceService: IInvoiceDomainService,
    costUpdatedEventPublisher: CostUpdatedEventPublisher
): Promise<number | null> => {
    const result = await invoiceService.updateCost(data);
    costUpdatedEventPublisher.response = result;
    costUpdatedEventPublisher.publish();
    return result;
}
