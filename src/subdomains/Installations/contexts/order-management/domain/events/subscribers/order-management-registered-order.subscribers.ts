export abstract class OrderManagementRegisteredOrderSubscriber {
    async handle(event: any) {
      console.log('OrderManagementRegisteredOrderSubscriber', event);
      console.log('The action registration process must be executed');
    }
}