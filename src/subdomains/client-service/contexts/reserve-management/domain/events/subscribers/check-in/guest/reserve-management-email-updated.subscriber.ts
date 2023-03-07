export abstract class ReserveManagementEmailUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementEmailUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}