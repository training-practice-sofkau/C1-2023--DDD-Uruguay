export abstract class OrderManagementRegisteredInvoiceSubscriber {
    async handle(event: any) {
      console.log('OrderManagementRegisteredInvoiceSubscriber', event);
      console.log('The action registration process must be executed');
    }
}