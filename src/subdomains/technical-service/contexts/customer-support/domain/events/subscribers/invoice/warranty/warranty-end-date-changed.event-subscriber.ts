export abstract class WarrantyEndDateChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.warranty-end-date-changed',event);
      console.log('Event launched - Do Something');
    }
  }