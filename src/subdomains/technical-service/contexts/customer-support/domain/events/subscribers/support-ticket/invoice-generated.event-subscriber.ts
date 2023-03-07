export abstract class InvoiceGeneratedEventSubscriber {
    async handle(event: any) {
      console.log('InvoiceGeneratedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }