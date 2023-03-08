
/**
 *Funsión que valida que una cadena de caracteres tenga la estructura de una dirección
 *
 * @export
 * @param {string} valor
 * @return {*}  {boolean}
 */
 export function EsDireccion(valor: string): boolean {

    const regex = /^\p{L}+(\s\p{L}+){1,2}\s\d{1,5}(?!.*\bapto\s\d{1,5}\b).*$/;

    const matches = valor.match(regex);

    return matches != null ? true : false;
}