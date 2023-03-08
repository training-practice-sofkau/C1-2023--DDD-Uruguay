
/**
 *Funsión que verifica que un valor sea string y solo contenga letras y espacios
 *
 * @export
 * @param {string} valor
 * @return {*}  {boolean}
 */
export function EsStringAlfabetico(valor: string): boolean {

    const regex = /^[A-Za-z\s]+$/g;

    const matches = valor.match(regex);
    
    if((typeof valor === 'string') === false || matches === null ) return false;

    return true;
}