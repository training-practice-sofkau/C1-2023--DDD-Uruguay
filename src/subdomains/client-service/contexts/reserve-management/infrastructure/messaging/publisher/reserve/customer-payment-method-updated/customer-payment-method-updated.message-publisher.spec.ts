import { CustomerPaymentMethodUpdatedMessagePublisher } from './customer-payment-method-updated.message-publisher';

describe('CustomerPaymentMethodUpdatedMessagePublisher', () => {
  it('should be defined', () => {
    expect(new CustomerPaymentMethodUpdatedMessagePublisher()).toBeDefined();
  });
});
