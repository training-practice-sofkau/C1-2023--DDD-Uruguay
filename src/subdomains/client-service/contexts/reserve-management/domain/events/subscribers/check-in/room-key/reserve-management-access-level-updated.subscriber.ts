export abstract class ReserveManagementAccessLevelUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementAccessLevelUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}