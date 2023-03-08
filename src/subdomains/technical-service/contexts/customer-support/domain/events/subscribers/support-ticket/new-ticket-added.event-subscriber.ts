export abstract class NewTicketAddedEventSubscriber {
    async handle(event: any) {
      console.log('NewTicketAddedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }