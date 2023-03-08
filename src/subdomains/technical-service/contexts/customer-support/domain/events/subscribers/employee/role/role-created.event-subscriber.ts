export abstract class RoleCreatedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.role-created', event);
      console.log('Event launched - Do Something');
    }
  }