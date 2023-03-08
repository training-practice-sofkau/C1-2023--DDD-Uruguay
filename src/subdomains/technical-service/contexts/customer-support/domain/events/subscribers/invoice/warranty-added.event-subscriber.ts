export abstract class WarrantyAddedEventSubscriber {
    async handle(event: any) {
      console.log('WarrantyAddedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }