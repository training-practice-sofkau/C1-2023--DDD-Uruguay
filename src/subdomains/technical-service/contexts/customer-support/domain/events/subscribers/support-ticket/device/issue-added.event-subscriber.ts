export abstract class IssueAddedEventSubscriber {
    async handle(event: any) {
      console.log('IssueAddedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }