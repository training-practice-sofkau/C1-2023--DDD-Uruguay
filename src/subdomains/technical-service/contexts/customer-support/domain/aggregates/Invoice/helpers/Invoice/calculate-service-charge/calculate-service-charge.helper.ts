import { IInvoiceDomainService } from '../../../../services/invoice/invoice.domain-service';
import { UUIDValueObject } from '../../../../value-objects/common/uuid/uuid.value-object';
import { ServiceChargeCalculatedEventPublisherBase } from '../../../../events/publishers/invoice/service-charge-calculated.event-publisher';

export const CalculateServiceCharge = async (
    ticketID: UUIDValueObject,
    invoiceService: IInvoiceDomainService,
    serviceChargeCalculatedEventPublisherBase: ServiceChargeCalculatedEventPublisherBase
): Promise<number> => {

    const result = await invoiceService.CalculateServiceCharge(ticketID);
    serviceChargeCalculatedEventPublisherBase.response = result;
    serviceChargeCalculatedEventPublisherBase.publish();

    return result;
}