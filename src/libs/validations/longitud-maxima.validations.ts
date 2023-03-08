
/**
 *Funsión que valida si una cadena de caracteres cumple la longitud máxima establecida
 *
 * @export
 * @param {string} palabra
 * @param {number} maximo
 * @return {*}  {boolean}
 */
export function LongitudMaxima(palabra: string, maximo: number): boolean {

    return palabra.length <= maximo ? true : false;
}