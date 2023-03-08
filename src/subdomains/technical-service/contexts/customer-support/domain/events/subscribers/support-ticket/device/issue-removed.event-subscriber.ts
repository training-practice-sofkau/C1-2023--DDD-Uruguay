export abstract class IssueRemovedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.issue-removed', event);
      console.log('Event launched - Do Something');
    }
  }