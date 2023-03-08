import { IInvoiceDomainService } from '../../../../services/invoice/invoice.domain-service';
import { INotifyCustomerCommand } from '../../../../interfaces/commands/invoice/notify-customer.command';
import { CustomerNotificationSentEventPublisherBase } from '../../../../events/publishers/customer/customer-notification-sent.event-publisher';

export const NotifyCustomer = async (
    notification: INotifyCustomerCommand,
    invoiceService: IInvoiceDomainService,
    customerNotificationSentEventPublisherBase: CustomerNotificationSentEventPublisherBase
): Promise<boolean> => {

    const result = await invoiceService.NotifyCustomer(notification);
    customerNotificationSentEventPublisherBase.response = result;
    customerNotificationSentEventPublisherBase.publish();

    return result;
}
