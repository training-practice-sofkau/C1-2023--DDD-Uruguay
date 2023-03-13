export abstract class InvoiceCreatedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.invoice-created', event);
      console.log('Event launched - Do Something');
    }
  }