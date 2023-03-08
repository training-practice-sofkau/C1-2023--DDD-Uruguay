export abstract class ItemAddedToWarrantyEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.item-added-to-warranty', event);
      console.log('Event launched - Do Something');
    }
  }