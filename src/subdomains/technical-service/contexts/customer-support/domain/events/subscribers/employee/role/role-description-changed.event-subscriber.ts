export abstract class RoleDescriptionChangedEventSubscriber {
    async handle(event: any) {
      console.log('RoleDescriptionChangedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }