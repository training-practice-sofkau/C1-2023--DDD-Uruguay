export abstract class ReserveManagementPaymentMethodUpdateSubscriber {
    async handle(event: any) {
      console.log('ReserveManagementPaymentMethodUpdateSubscriber', event);
      console.log('Hay que ejecutar el proceso de registro de la acción');
    }
  }