export abstract class ServiceChargeCalculatedEventSubscriber {
    async handle(event: any) {
      console.log('ServiceChargeCalculatedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }