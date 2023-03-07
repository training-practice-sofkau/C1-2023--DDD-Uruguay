export abstract class OrderManagementAddedBenefitedOrderSubscriber {
    async handle(event: any) {
      console.log('OrderManagementAddedBenefitedOrderSubscriber', event);
      console.log('The action add process must be executed');
    }
}