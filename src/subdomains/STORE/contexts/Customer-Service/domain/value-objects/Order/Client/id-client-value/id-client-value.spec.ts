import { IdClientValueObject } from './';

describe("validate Id", () => {

  it("should add an error if the value is invalid", () => {
    const value = "invalid-value";
    const mangaId = new IdClientValueObject(value);
  
    mangaId.validateData();
  
    expect(mangaId.hasErrors()).toBeFalsy();
    
   
  });
  it("Test UUID ", () => {
    const value = "f0b9c684-7d28-4c58-9947-f66f71dd3ab3";
    const seller = new IdClientValueObject(value);
  
    seller.validateData();
  
    expect(seller.hasErrors()).toBeTruthy();
   
  });
  
  })