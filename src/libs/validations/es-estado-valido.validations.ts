
const estadosDePedido: string[] = [
    "preparándose",
    "listo",
    "en camino"
];

/**
 *Funsión que verifica si un estado está dentro de la lista de estados permitidos
 *
 * @export
 * @param {string} estado
 * @return {*}  {boolean}
 */
export function EsEstadoValido(estado: string): boolean {

    const esValida: boolean = estadosDePedido.includes(estado);

    return esValida;
}