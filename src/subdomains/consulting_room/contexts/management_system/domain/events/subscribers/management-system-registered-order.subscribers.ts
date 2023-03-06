export abstract class ManagementSystemRegisteredOrderSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemRegisteredOrderSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }