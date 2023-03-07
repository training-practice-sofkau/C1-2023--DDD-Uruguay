export abstract class InvoiceCreatedEventSubscriber {
    async handle(event: any) {
      console.log('InvoiceCreatedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }