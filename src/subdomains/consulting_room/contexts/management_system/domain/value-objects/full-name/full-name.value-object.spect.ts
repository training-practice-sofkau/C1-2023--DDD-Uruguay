jest.mock('@validations')

import { FullNameValueObject } from "./full-name.value-object"
import * as validadores from '@validations';

describe('FullNameValueObject', () => {
    let valueObject: FullNameValueObject;

    beforeEach(() => {
        valueObject = new FullNameValueObject();

        jest.spyOn(validadores, 'IsEmpty').mockImplementation(data => {
            switch(data){
                case 'Matias Souza':
                    return false
                case undefined:
                    return true
                default:
                    return false
            }
        })
    });

    it('should create an instance', () => {
        expect(valueObject).toBeDefined();
    })

    describe('checking the value of the object', () => {

        it('should return the expected data', () => {

            //Arrange
            const expected = 'Matias Souza';
            const data = 'Matias Souza';

            //Act
            valueObject = new FullNameValueObject(data)
            const result = valueObject.valueOf();
            valueObject.validateData()

            //Assert
            expect(validadores.IsEmpty).toHaveBeenCalledWith(data)
            expect(valueObject.hasErrors()).toBe(false)
            expect(result).toBe(expected)

        })
    })
    describe('checking the value of the object', () => {

        it('should return an error expected data', () => {

            //Arrange
            const expected = 'El nombre completo es obligatorio';
            const expectedError = true;
            const data = undefined;

           

            //Act
            valueObject = new FullNameValueObject(data)

            //Assert
            expect(validadores.IsEmpty).toHaveBeenCalledWith(data)
            expect(valueObject.hasErrors()).toBe(expectedError)
            expect(valueObject.getErrors()[0].message).toBe(expected)

        })
    })
})