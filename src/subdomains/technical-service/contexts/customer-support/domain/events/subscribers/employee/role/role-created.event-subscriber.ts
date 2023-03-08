export abstract class RoleCreatedEventSubscriber {
    async handle(event: any) {
      console.log('RoleCreatedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }