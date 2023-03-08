export abstract class ItemRemovedFromWarrantyEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.item-removed-from-warranty',event);
      console.log('Event launched - Do Something');
    }
  }