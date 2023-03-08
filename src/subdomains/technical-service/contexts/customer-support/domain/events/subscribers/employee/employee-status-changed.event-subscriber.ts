export abstract class EmployeeStatusChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.employee-status-changed', event);
      console.log('Event launched - Do Something');
    }
  }