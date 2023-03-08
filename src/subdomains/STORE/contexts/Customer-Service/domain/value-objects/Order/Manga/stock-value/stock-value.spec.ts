import { StockValue } from './stock-value';

describe("validate amount", () => {

  it("Le pasamos un monto negativo deberia fallar", () => {
    const value = -15;
    const stock = new StockValue(value);
  
    stock.validateData();
  
    expect(stock.hasErrors()).toBeFalsy();
    
   
  });
  it("Aca funciona :D", () => {
    const value = 1544;
    const stock = new StockValue(value);
  
    stock.validateData();
  
    expect(stock.hasErrors()).toBeTruthy();
   
  });
  
  })