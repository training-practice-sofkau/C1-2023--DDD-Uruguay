export abstract class ReserveManagementInvoiceCostUpdateSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementInvoiceCostUpdateSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}