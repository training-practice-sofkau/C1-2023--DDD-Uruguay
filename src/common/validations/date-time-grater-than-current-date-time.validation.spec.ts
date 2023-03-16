import { IsDateTimeGraterThanCurrentDateTime } from '.';

describe('IsDateTimeGraterThanCurrentDateTime', () => {
  let validador: typeof IsDateTimeGraterThanCurrentDateTime;

  // Antes de todas las pruebas
  beforeAll(() => {});

  // Antes de cada prueba
  beforeEach(() => {
    // Arrange
    validador = IsDateTimeGraterThanCurrentDateTime;
  });

  it('esto debería definir la función', () => {
    // Assert
    expect(validador).toBeDefined();
  });

  it('debería ser verdadero', () => {
    // Arrange
    const date = Date.now() + 2000;
    const expected = true;

    // Act
    const result = validador(date);

    // Assert
    expect(result).toEqual(expected);
  })

  it('debería ser falso', () => {
    // Arrange
    const date = Date.now() + 2000;
    const expected = false;

    // Act
    const result = validador(date);

    // Assert
    expect(result).not.toEqual(expected);
  })

  // Despues de cada prueba
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Despues de todas las pruebas
  afterAll(() => {
    jest.restoreAllMocks();
  });
});
