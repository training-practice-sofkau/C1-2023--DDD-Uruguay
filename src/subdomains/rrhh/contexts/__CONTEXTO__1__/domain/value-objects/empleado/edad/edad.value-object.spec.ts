import { Edad } from './edad.value-object';

describe('Edad', () => {
  it('should be defined', () => {
    expect(new Edad()).toBeDefined();
  });
});
