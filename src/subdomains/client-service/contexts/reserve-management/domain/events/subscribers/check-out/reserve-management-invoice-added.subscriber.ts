export abstract class ReserveManagementInvoiceAddedSubscriber {
    async handle(event: any) {
        console.log('ReserveManagementInvoiceAddedSubscriber', event);
        console.log('Hay que ejecutar el proceso de registro de la acción');
    }
}