export abstract class ReserveManagementPhoneUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementPhoneUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}