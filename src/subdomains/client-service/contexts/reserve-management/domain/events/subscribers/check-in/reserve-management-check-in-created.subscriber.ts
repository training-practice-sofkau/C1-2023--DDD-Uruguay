export abstract class ReserveManagementCheckInCreatedSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementCheckInCreatedSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}