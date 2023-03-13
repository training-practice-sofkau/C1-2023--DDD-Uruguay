export abstract class OrderManagementAddedFeeInvoiceSubscriber {
  async handle(event: any) {
    console.log("OrderManagementAddedFeeInvoiceSubscriber", event);
    console.log("The action add process must be executed");
  }
}
