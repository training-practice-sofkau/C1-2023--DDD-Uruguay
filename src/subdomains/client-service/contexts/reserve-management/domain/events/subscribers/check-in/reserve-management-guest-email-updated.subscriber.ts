export abstract class ReserveManagementGuestEmailUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementGuestEmailUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}