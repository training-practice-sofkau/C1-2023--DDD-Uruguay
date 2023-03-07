export abstract class ReserveManagementMiniBarUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementMiniBarUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}