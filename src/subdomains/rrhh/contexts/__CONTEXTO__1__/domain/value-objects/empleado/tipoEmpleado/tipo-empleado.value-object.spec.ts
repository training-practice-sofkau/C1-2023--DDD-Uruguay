import { TipoEmpleado } from './tipo-empleado.value-object';

describe('TipoEmpleado', () => {
  it('should be defined', () => {
    expect(new TipoEmpleado()).toBeDefined();
  });
});
