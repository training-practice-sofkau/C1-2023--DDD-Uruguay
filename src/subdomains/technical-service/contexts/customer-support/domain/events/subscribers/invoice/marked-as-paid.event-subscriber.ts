export abstract class InvoiceMarkedAsPaidEventSubscriber {
    async handle(event: any) {
      console.log('InvoiceMarkedAsPaidEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }