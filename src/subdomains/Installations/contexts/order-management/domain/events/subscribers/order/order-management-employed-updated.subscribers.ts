export abstract class OrderManagementUpdatedEmployedOrderSubscriber {
  async handle(event: any) {
    console.log("OrderManagementUpdatedEmployedOrderSubscriber", event);
    console.log("The action update process must be executed");
  }
}
