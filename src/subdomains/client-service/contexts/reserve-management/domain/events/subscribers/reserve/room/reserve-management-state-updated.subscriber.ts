export abstract class ReserveManagementStateUpdatedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementStateUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }