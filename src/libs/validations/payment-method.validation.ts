export const IsValidPaymentMethod = (value: string): boolean => {

    const regex = /^(Credito|Debito)$/i;

    const matches = value.match(regex);

    return matches != null ? true : false;
}