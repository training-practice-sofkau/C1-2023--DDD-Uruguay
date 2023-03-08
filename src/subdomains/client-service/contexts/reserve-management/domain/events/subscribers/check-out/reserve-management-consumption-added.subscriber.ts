export abstract class ReserveManagementConsumptionAddedSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementConsumptionAddedSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}