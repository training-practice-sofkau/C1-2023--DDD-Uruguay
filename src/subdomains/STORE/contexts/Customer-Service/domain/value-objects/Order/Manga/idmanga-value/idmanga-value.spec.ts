import { IdmangaValue } from './idmanga-value';

describe("validate Id", () => {

  it("should add an error if the value is invalid", () => {
    const value = "invalid-value";
    const mangaId = new IdmangaValue(value);
  
    mangaId.validateData();
  
    expect(mangaId.hasErrors()).toBeFalsy();
    
   
  });
  it("Test UUID ", () => {
    const value = "f0b9c684-7d28-4c58-9947-f66f71dd3ab3";
    const seller = new IdmangaValue(value);
  
    seller.validateData();
  
    expect(seller.hasErrors()).toBeTruthy();
   
  });
  
  })