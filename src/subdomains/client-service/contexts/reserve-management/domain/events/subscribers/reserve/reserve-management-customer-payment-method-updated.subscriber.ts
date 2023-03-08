export abstract class ReserveManagementCustomerPaymentMethodUpdatedSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementCustomerPaymentMethodUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }