export abstract class ItemRemovedFromWarrantyEventSubscriber {
    async handle(event: any) {
      console.log('ItemRemovedFromWarrantyEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }