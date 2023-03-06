export abstract class ManagementSystemStartDateUpdatedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemStartDateUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }