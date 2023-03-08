export abstract class ReserveManagementGuestPhoneUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementGuestPhoneUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}