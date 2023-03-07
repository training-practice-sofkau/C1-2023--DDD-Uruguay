export abstract class TicketClosedEventSubscriber {
    async handle(event: any) {
      console.log('TicketClosedEventSubscriber', event);
      console.log('Event launched - Do Something');
    }
  }