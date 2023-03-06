export abstract class ManagementSystemReserveCreatedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemReserveCreatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }