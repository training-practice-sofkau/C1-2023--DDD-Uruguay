export abstract class IssueRemovedEventSubscriber {
    async handle(event: any) {
      console.log('IssueRemovedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }