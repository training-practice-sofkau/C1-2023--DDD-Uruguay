
/**
 *Funsión que valida que una dato sea booleano
 *
 * @export
 * @param {boolean} valor
 * @return {*}  {boolean}
 */
export function EsBoolean(valor: boolean): boolean {

    return typeof valor === 'boolean' ? true : false;
}
