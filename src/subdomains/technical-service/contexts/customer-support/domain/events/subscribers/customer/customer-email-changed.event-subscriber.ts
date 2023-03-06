export abstract class CustomerEmailChangedEventSubscriber {
    async handle(event: any) {
      console.log('CustomerEmailChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }