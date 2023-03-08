export abstract class TicketClosedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.ticket-closed', event);
      console.log('Event launched - Do Something');
    }
  }