export abstract class CustomerNotifiedEventSubscriber {
    async handle(event: any) {
      console.log('CustomerNotifiedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }