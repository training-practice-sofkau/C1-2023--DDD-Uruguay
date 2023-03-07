export abstract class OrderManagementUpdatedBenefitedOrderSubscriber {
    async handle(event: any) {
      console.log('OrderManagementUpdatedBenefitedOrderSubscriber', event);
      console.log('The action update process must be executed');
    }
}