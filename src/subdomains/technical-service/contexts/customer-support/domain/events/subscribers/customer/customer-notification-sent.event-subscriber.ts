export abstract class CustomerNotificationSentEventSubscriber {
    async handle(event: any) {
      console.log('CustomerNotificationSentEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }