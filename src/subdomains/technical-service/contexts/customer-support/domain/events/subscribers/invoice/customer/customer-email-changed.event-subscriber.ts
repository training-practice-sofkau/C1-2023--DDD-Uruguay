export abstract class CustomerEmailChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.customer-email-changed', event);
      console.log('Event launched - Do Something');
    }
  }