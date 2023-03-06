export abstract class ManagementSystemRoomAddedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemRoomAddedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }