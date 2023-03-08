import { PaymentMethodValue } from './payment-method-value';

describe("validando el metodo de pago", () => {

  it("Le pasamos un monto negativo deberia fallar", () => {
    const value = 6;
    const paymentMethod = new PaymentMethodValue(value);
  
    paymentMethod.validateData();
  
    expect(paymentMethod.hasErrors()).toBeFalsy();
    
   
  });
  it("Aca funciona :D", () => {
    const value = 1;
    const paymentMethod = new PaymentMethodValue(value);
  
    paymentMethod.validateData();
  
    expect(paymentMethod.hasErrors()).toBeTruthy();
   
  });
  
  })
