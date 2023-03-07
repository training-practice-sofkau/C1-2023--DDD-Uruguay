export abstract class CustomerPhoneChangedEventSubscriber {
    async handle(event: any) {
      console.log('CustomerPhoneChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }