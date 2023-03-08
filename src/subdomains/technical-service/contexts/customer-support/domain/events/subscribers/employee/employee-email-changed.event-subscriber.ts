export abstract class EmployeeEmailChangedEventSubscriber {
    async handle(event: any) {
      console.log('EmployeeEmailChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }