export abstract class ManagementSystemNumberOfGuestsUpdatedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemNumberOfGuestsUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }