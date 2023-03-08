export abstract class ReserveManagementStartDateUpdatedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementStartDateUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }