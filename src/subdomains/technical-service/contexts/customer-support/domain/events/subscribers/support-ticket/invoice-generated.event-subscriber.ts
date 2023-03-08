export abstract class InvoiceGeneratedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.invoice-generated', event);
      console.log('Event launched - Do Something');
    }
  }