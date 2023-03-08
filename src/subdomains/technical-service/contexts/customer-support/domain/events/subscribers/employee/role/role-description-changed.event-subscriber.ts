export abstract class RoleDescriptionChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.role-description-changed', event);
      console.log('Event launched - Do Something');
    }
  }