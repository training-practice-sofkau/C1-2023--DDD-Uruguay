export abstract class ReserveManagementRoomKeyAccessLevelUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementRoomKeyAccessLevelUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}