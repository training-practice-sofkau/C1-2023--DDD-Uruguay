export abstract class OrderManagementUpdatedFeeInvoiceSubscriber {
  async handle(event: any) {
    console.log("OrderManagementUpdatedFeeInvoiceSubscriber", event);
    console.log("The action update process must be executed");
  }
}
