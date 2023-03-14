export abstract class OrderManagementChangeOrderSubscriber {
  async handle(event: any) {
    console.log("OrderManagementChangeOrderStatusSubscriber", event);
    console.log("The action change process must be executed");
  }
}
