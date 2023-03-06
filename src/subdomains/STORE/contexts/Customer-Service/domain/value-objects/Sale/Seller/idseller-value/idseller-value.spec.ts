
import { IdsellerValue } from './idseller-value';

describe("validate Id", () => {

it("should add an error if the value is invalid", () => {
  const value = "invalid-value";
  const seller = new IdsellerValue(value);

  seller.validateData();

  expect(seller.hasErrors()).toBeFalsy();
  
 
});
it("Aca funciona :D", () => {
  const value = "f0b9c684-7d28-4c58-9947-f66f71dd3ab3";
  const seller = new IdsellerValue(value);

  seller.validateData();

  expect(seller.hasErrors()).toBeTruthy();
 
});

})