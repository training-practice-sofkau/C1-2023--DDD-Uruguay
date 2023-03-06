/**
 * It checks if the value is one of the three options in the regexp
 * @param {string} value - the value of the cell
 * @returns A function that takes a string and returns a boolean.
 */
export const isPayment= (value:number): boolean => {


    enum PaymentMethod {
        Efectivo = 1,
        Debito = 2,
        Credito = 3,
        'Transferencia bancaria' = 4
      }

   const isPaymentRegExp = new RegExp(`^(${Object.values(PaymentMethod).join('|')})$`);
   const payment = value.toString()
    const matches = payment.match(isPaymentRegExp)
    return matches !== null? true : false
    
}
