export abstract class ReserveManagementNumberOfGuestsUpdatedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementNumberOfGuestsUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }