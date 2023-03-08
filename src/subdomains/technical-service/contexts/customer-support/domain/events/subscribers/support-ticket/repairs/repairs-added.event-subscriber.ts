export abstract class RepairsAddedEventSubscriber {
    async handle(event: any) {
      console.log('RepairsAddedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }