export abstract class WarrantyStatusChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.warranty-status-changed', event);
      console.log('Event launched - Do Something');
    }
  }