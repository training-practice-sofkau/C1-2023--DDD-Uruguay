export abstract class EmployeeStatusChangedEventSubscriber {
    async handle(event: any) {
      console.log('EmployeeStatusChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }