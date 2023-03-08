export abstract class OrderManagementAddedKitOrderSubscriber {
    async handle(event: any) {
      console.log('OrderManagementAddedKitOrderSubscriber', event);
      console.log('The action add process must be executed');
    }
}