
jest.mock('@validations');

// Para probar el coverage
// npm run test:cov

import { AmountObjectValue } from "./amount.value-object";
import * as validadores from '@validations';

describe('AmountObjectValue', () => {
  let valueObject: AmountObjectValue;

  beforeEach(() => {
    valueObject = new AmountObjectValue();
    // jest.spyOn(validadores, 'IsEmpty').mockReturnValue(true);
    // jest.spyOn(validadores, 'IsEmpty').mockImplementation((data: number): boolean => {
    //   switch (data) {
    //     case 100:
    //       return false;
    //     case undefined:
    //       return true;
    //     default:
    //       return false;
    //   }
    // });
  });

  it('should create an instance', () => {
    expect(valueObject).toBeDefined();
  });

  describe('comprobando el valor del objeto', () => {
    it('debería devolver el dato esperado', () => {
      // Arrange
      const expected = 100;
      const data = 100;
      // Mock
      // jest.spyOn(validadores, 'IsEmpty').mockReturnValue(true);
      // Stub
      // jest.spyOn(validadores, 'IsEmpty').mockImplementation((data) => {
      //   return data === 100 ? true : false;
      // });

      // Act
      valueObject = new AmountObjectValue(data);
      const result = valueObject.valueOf();

      // Assert
      expect(result).toBe(expected);
      expect(validadores.IsEmpty).toHaveBeenCalledWith(data);
    });

    it('debería devolver el un dato diferente', () => {
      // Arrange
      const expected = 101;
      const data = 100;
      // Mock
      // jest.spyOn(validadores, 'IsEmpty').mockReturnValue(true);
      // Stub
      // jest.spyOn(validadores, 'IsEmpty').mockImplementation((data) => {
      //   return data === 100 ? true : false;
      // });

      // Act
      valueObject = new AmountObjectValue(data);
      const result = valueObject.valueOf();

      // Assert
      expect(result).not.toBe(expected);
      expect(validadores.IsEmpty).toHaveBeenCalledWith(data);
    });
  });

  describe('comprobando los errores del objeto', () => {
    it('debería tener el error de IsEmpty', () => {
      // Arrange
      const expectedMessage = 'El el monto es obligatorio';
      const expectedHasErrors = true;
      const data = undefined;
      jest.spyOn(validadores, 'IsEmpty').mockReturnValue(true);

      // Act
      valueObject = new AmountObjectValue(data);

      // Assert
      expect(validadores.IsEmpty).toHaveBeenCalledWith(data);
      expect(valueObject.hasErrors()).toBe(expectedHasErrors);
      expect(valueObject.getErrors()[0].message).toBe(expectedMessage);
    });
  });

});