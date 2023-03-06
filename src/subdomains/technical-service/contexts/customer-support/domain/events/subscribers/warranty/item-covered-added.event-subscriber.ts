export abstract class ItemCoveredAddedEventSubscriber {
    async handle(event: any) {
      console.log('ItemCoveredAddedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }