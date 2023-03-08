
/**
 *Funsión que valida que un valor sea un number y que sea mayor que cero
 *
 * @export
 * @param {number} valor
 * @return {*}  {boolean}
 */
export function EsPrecioValido(valor: number): boolean {

    if(
        (typeof valor === 'number') === false
        || valor <= 0
    ) return false;

    return true;
}