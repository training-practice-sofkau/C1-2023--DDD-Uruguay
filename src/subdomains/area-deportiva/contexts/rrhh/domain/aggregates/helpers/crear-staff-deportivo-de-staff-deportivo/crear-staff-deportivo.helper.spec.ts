import { AggregateRootException } from 'src/libs';
import { StaffDeportivoDomainEntity } from '../../../entities';
import { StaffDeportivoCreadoEventPublisher } from '../../../events';
import { IStaffDeportivoDomainService } from '../../../services';
import { CrearStaffDeportivoHelper } from './crear-staff-deportivo.helper';
describe('CrearStaffDeportivoHelper', () => {
  let service: IStaffDeportivoDomainService;
  let event: StaffDeportivoCreadoEventPublisher;
  let entity: StaffDeportivoDomainEntity;
  let helper: typeof CrearStaffDeportivoHelper;

  beforeEach(() => {
    // Arrange
    service = {
      crearStaffDeportivoHelper: jest.fn(),
    } as unknown as IStaffDeportivoDomainService;
    event = {
      publish: jest.fn(),
      response: undefined,
    } as unknown as StaffDeportivoCreadoEventPublisher;
    entity = new StaffDeportivoDomainEntity({

      staffDeportivoId: '19b48c31-1c27-4ccd-b461-2d9c29f4ef10',
      nombre: 'Staff Madrid',
      tramite: {
        tramiteId:'20b48c31-1c27-4ccd-b461-2d9c29f4ef10',
        negociacion: {
          negociacionId: '20b48c31-1c27-4ccd-b461-2d9c29f4ef10',
          equipoSalidaId: '20b48c31-1c27-4ccd-b461-2d9c29f4ef20',
          equipoNuevoId: '20b48c31-1c27-4ccd-b461-2d9c29f4ef30',
          tipoNegociacion: 'Cesion',
          terminoACumplir: 'Terminos a cumplis prueba',
          state: true,
        },
        fecha: '05/03/2023',
      },
      empleado: {
        empleadoId: '192123b48c31-1c27-4ccd-b461-2d9c29f4ef10',
        nombre: 'Cristian Gonzalez',
        documento: '55975866',
        tipoEmpleado: 'Jugador',
        nacionalidad : 'Uruguay',
        edad : 20,
        salario: 15000,
      },
    });

    // Act
    helper = CrearStaffDeportivoHelper;
  });

  it('should be defined', () => {
    // Assert
    expect(helper).toBeDefined();
  });

  it('should throw AggregateRootException if service is undefined', async () => {
    // Arrange
    service = undefined as unknown as IStaffDeportivoDomainService;
    const expectedMessage =
      'Servicio Staff Deportivo indefinido';

    // Act
    const result = () => helper(entity, service, event);

    // Assert
    await expect(result).rejects.toThrow(AggregateRootException);
    await expect(result).rejects.toThrow(expectedMessage);
  });

  it('should throw AggregateRootException if event is undefined', async () => {
    // Arrange
    event = undefined as unknown as StaffDeportivoCreadoEventPublisher;
    const expectedMessage =
      'Evento creador de Staff Deportivo indefinido';

    // Act
    const result = () => helper(entity, service, event);

    // Assert
    await expect(result).rejects.toThrow(AggregateRootException);
    await expect(result).rejects.toThrow(expectedMessage);
  });

  it('should return entity', async () => {
    // Arrange
    service.CrearStaffDeportivo = jest.fn().mockResolvedValue(entity);

    // Act
    const result = await helper(entity, service, event);

    // Assert
    expect(result).toEqual(entity);
  });

  it('should call service.CrearStaffDeportivo', async () => {
    // Arrange
    jest.spyOn(service, 'CrearStaffDeportivo');

    // Act
    await helper(entity, service, event);

    // Assert
    expect(service.CrearStaffDeportivo).toHaveBeenCalledWith(entity);
  });

  it('should call event.publish', async () => {
    // Arrange
    jest.spyOn(event, 'publish');

    // Act
    await helper(entity, service, event);

    // Assert
    expect(event.publish).toHaveBeenCalled();
  });

  it('should set event.response', async () => {
    // Arrange
    service.CrearStaffDeportivo = jest.fn().mockResolvedValue(entity);

    // Act
    await helper(entity, service, event);

    // Assert
    expect(event.response).toEqual(entity);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});

function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}
