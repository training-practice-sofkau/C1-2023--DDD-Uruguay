export abstract class IssueDetailsChangedEventSubscriber {
    async handle(event: any) {
      console.log('IssueDetailsChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }