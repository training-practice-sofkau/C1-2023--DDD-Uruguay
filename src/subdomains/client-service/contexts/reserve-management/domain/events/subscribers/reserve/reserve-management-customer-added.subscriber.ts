export abstract class ReserveManagementCustomerAddedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementCustomerAddedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }