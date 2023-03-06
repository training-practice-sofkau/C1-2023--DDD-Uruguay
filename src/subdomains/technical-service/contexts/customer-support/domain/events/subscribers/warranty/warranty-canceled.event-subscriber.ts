export abstract class WarrantyCanceledEventSubscriber {
    async handle(event: any) {
      console.log('WarrantyCanceledEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }