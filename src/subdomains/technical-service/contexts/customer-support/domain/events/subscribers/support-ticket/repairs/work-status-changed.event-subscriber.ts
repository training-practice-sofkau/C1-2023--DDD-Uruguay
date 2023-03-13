export abstract class WorkStatusChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.work-status-changed', event);
      console.log('Event launched - Do Something');
    }
  }