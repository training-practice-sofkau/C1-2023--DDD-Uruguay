export abstract class ManagementSystemRoomStateUpdatedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemRoomStateUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }