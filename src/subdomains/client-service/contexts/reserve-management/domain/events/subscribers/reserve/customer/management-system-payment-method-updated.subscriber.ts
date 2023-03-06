export abstract class ManagementSystemPaymentMethodUpdateSubscriber {
    async handle(event: any) {
      console.log('ManagementSystemPaymentMethodUpdateSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }