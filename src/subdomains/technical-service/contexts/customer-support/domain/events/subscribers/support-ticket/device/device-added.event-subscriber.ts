export abstract class DeviceAddedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.device-added', event);
      console.log('Event launched - Do Something');
    }
  }