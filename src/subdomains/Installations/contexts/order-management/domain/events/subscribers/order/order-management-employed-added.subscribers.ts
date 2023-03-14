export abstract class OrderManagementCreatedEmployedOrderSubscriber {
  async handle(event: any) {
    console.log("OrderManagementCreatedEmployedOrderSubscriber", event);
    console.log("The action add process must be executed");
  }
}
