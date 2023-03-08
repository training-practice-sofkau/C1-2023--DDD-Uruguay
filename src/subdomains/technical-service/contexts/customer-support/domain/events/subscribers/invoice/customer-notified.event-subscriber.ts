export abstract class CustomerNotifiedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.customer-notified', event);
      console.log('Event launched - Do Something');
    }
  }