export abstract class WarrantyAddedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.warranty-added', event);
      console.log('Event launched - Do Something');
    }
  }