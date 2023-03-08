export abstract class DeviceAddedEventSubscriber {
    async handle(event: any) {
      console.log('DeviceAddedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }