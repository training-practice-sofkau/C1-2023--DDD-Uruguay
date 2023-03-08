export abstract class ServiceChargeCalculatedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.service-charge-calculated', event);
      console.log('Event launched - Do Something');
    }
  }