export abstract class ReserveManagementRoomKeyAddedSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementRoomKeyAddedSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}