export abstract class CustomerCreatedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.customer-created', event);
      console.log('Event launched - Do Something');
    }
  }