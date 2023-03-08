import { PaymentAmountValue } from './payment-amount-value';

describe("validate amount", () => {

  it("Le pasamos un monto negativo deberia fallar", () => {
    const value = -15;
    const seller = new PaymentAmountValue(value);
  
    seller.validateData();
  
    expect(seller.hasErrors()).toBeFalsy();
    
   
  });
  it("Aca funciona :D", () => {
    const value = 1544;
    const seller = new PaymentAmountValue(value);
  
    seller.validateData();
  
    expect(seller.hasErrors()).toBeTruthy();
   
  });
  
  })