export abstract class EmployeeEmailChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.employee-email-changed', event);
      console.log('Event launched - Do Something');
    }
}