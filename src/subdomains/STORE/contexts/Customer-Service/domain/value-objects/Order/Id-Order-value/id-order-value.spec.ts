import { IdOrdertValueObject } from './id-order-value';


describe("validate Id", () => {

    it("should add an error if the value is invalid", () => {
      const value = "invalid-value";
      const IDorder = new IdOrdertValueObject(value);
    
      IDorder.validateData();
    
      expect(IDorder.hasErrors()).toBeFalsy();

    });
    it("Test UUID ", () => {
      const value = "f0b9c684-7d28-4c58-9947-f66f71dd3ab3";
      const IDorder = new IdOrdertValueObject(value);
    
      IDorder.validateData();
    
      expect(IDorder.hasErrors()).toBeTruthy();

    });
    
    })