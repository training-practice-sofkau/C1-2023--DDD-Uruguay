export abstract class ManagementSystemEndDateUpdatedOrderSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemEndDateUpdatedOrderSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }