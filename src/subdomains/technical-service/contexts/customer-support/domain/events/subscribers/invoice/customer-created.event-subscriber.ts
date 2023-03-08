export abstract class CustomerCreatedEventSubscriber {
    async handle(event: any) {
      console.log('CustomerCreatedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }