export abstract class ReserveManagementExtraUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementExtraUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}