export abstract class ReserveManagementConsumptionExtraUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementConsumptionExtraUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}