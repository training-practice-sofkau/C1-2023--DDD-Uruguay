export abstract class RepairsAddedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.repairs-added', event);
      console.log('Event launched - Do Something');
    }
  }