export abstract class OrderManagementCreatedBenefitedOrderSubscriber {
  async handle(event: any) {
    console.log("OrderManagementCreatedBenefitedOrderSubscriber", event);
    console.log("The action add process must be executed");
  }
}
