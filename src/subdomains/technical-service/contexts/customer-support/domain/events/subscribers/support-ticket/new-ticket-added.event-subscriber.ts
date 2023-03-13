export abstract class NewTicketAddedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.new-ticket-added', event);
      console.log('Event launched - Do Something');
    }
  }