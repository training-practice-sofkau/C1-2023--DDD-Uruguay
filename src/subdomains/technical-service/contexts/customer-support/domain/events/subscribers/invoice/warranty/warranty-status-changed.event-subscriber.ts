export abstract class WarrantyStatusChangedEventSubscriber {
    async handle(event: any) {
      console.log('WarrantyStatusChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }