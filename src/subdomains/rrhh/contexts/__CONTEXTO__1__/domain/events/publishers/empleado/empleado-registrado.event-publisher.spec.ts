import { EmpleadoRegistradoEventPublisher } from "./empleado-registrado.event-publisher";

describe('EmpleadoRegistradoEventPublisher', () => {
  it('should be defined', () => {
    expect(new EmpleadoRegistradoEventPublisher()).toBeDefined();
  });
});
