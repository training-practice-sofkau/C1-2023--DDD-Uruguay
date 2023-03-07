export abstract class ReserveManagementGuestAddedSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementGuestAddedSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}