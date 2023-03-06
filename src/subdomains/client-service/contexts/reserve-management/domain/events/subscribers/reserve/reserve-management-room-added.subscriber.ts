export abstract class ReserveManagementRoomAddedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementRoomAddedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }