export abstract class CustomerPhoneChangedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.customer-phone-changed', event);
      console.log('Event launched - Do Something');
    }
  }