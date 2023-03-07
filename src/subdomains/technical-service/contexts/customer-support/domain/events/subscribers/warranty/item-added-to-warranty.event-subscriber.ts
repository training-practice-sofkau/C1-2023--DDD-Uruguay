export abstract class ItemAddedToWarrantyEventSubscriber {
    async handle(event: any) {
      console.log('ItemAddedToWarrantyEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }