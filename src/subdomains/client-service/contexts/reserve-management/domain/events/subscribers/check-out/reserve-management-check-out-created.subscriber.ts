export abstract class ReserveManagementCheckOutCreatedSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementCheckOutCreatedSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}