import { describe, it } from 'node:test';
import { TrainerDomainEntity } from './trainer.domain-entity';

describe('TrainerDomainEntity', () => {
  it('should be defined', () => {
    expect(new TrainerDomainEntity()).toBeDefined();
  });
});
