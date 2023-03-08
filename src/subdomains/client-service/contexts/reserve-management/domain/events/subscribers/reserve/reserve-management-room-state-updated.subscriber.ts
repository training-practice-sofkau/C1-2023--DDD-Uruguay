export abstract class ReserveManagementRoomStateUpdatedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementRoomStateUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }