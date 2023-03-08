
/**
 *Funsión que valida si una cadena de caracteres cumple la longitud mínima establecida
 *
 * @export
 * @param {string} palabra
 * @param {number} minimo
 * @return {*}  {boolean}
 */
export function LongitudMinima(palabra: string, minimo: number): boolean {

    return palabra.length >= minimo ? true : false;
}