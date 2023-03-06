export abstract class ReserveManagementEndDateUpdatedOrderSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementEndDateUpdatedOrderSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }