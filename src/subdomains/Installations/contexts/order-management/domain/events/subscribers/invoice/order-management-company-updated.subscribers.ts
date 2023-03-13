export abstract class OrderManagementUpdatedCompanyInvoiceSubscriber {
  async handle(event: any) {
    console.log("OrderManagementUpdatedCompanyInvoiceSubscriber", event);
    console.log("The action update process must be executed");
  }
}
