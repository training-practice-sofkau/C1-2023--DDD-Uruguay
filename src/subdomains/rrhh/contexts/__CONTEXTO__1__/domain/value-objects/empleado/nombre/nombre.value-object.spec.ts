import { Nombre } from './nombre.value-object';

describe('Nombre', () => {
  it('should be defined', () => {
    expect(new Nombre()).toBeDefined();
  });
});
