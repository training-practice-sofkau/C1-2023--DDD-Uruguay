import { Client } from './client.domain-entity';

describe('Client', () => {
  it('should be defined', () => {
    expect(new Client()).toBeDefined();
  });
});
