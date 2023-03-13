export abstract class OrderManagementAddedEmployedOrderSubscriber {
  async handle(event: any) {
    console.log("OrderManagementAddedEmployedOrderSubscriber", event);
    console.log("The action add process must be executed");
  }
}
