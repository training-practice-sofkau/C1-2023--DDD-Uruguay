export abstract class ReserveManagementReserveCreatedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementReserveCreatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }