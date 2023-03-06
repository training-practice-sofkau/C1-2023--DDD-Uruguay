import { AddCustomerUseCase } from './add-customer.use-case';

describe('AddCustomerUseCase', () => {
  it('should be defined', () => {
    expect(new AddCustomerUseCase()).toBeDefined();
  });
});
