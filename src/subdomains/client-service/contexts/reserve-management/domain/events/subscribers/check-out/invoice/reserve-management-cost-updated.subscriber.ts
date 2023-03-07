export abstract class ReserveManagementCostUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementCostUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}