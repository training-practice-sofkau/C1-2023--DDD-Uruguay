export abstract class ReserveManagementConsumptionMiniBarUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementConsumptionMiniBarUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}