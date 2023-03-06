export abstract class ManagementSystemCustomerAddedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemCustomerAddedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }