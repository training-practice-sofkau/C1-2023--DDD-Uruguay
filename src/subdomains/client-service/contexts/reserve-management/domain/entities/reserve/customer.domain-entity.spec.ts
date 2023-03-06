import { CustomerDomainEntity } from './customer.domain-entity';

describe('CustomerDomainEntity', () => {
  it('should be defined', () => {
    expect(new CustomerDomainEntity()).toBeDefined();
  });
});
