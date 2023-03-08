export abstract class InvoiceMarkedAsPaidEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.invoice-marked-as-paid', event);
      console.log('Event launched - Do Something');
    }
  }