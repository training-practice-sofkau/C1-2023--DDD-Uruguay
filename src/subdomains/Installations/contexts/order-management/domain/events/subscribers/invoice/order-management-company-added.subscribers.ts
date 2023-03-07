export abstract class OrderManagementAddedCompanyInvoiceSubscriber {
    async handle(event: any) {
      console.log('OrderManagementAddedCompanyInvoiceSubscriber', event);
      console.log('The action add process must be executed');
    }
}