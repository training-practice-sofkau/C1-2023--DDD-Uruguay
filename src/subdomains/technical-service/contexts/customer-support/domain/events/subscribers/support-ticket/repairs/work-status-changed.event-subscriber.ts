export abstract class WorkStatusChangedEventSubscriber {
    async handle(event: any) {
      console.log('WorkStatusChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }