export abstract class ManagementSystemCustomerPaymentMethodUpdatedSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemCustomerPaymentMethodUpdatedSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }