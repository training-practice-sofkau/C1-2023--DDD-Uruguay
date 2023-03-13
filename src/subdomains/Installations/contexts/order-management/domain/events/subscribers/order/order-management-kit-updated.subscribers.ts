export abstract class OrderManagementUpdatedKitOrderSubscriber {
  async handle(event: any) {
    console.log("OrderManagementUpdatedKitOrderSubscriber", event);
    console.log("The action update process must be executed");
  }
}
