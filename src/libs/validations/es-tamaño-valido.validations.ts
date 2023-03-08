
const tamanios: string[] = [
    "pequeño",
    "mediano",
    "grande",
    "extra grande"

];

/**
 *Funsión que verifica si un valor es un tamaño válido
 *
 * @export
 * @param {string} tamanio
 * @return {*}  {boolean}
 */
export function EsTamanioValido(tamanio: string): boolean {

    const esValida: boolean = tamanios.includes(tamanio);

    return esValida;
}