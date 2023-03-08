export abstract class IssueAddedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.issue-added', event);
      console.log('Event launched - Do Something');
    }
  }