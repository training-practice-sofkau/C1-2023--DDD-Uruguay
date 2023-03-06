export abstract class ManagementSystemStateUpdatedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemStateUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }