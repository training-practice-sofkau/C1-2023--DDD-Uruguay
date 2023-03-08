export abstract class OrderManagementChangeInvoiceSubscriber {
    async handle(event: any) {
      console.log('OrderManagementChangeInvoiceStatusSubscriber', event);
      console.log('The action change process must be executed');
    }
}