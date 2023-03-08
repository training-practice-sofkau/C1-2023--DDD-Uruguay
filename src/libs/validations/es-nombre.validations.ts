
/**
 *Funsión que valida que una cadena de caracteres tenga la estructura de un nombre
 *
 * @export
 * @param {string} valor
 * @return {*}  {boolean}
 */
export function EsNombre(valor: string): boolean {

    const regex =
        /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

    const matches = valor.match(regex);

    return matches != null ? true : false;
}
