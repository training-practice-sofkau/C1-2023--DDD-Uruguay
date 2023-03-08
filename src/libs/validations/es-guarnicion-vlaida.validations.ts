
const guarniciones: string[] = [
    "arroz",
    "papas fritas",
    "puré de papas",
    "ensalada",
    "pan"
];

/**
 *Funsión que verifica si un valor es una guarnición es válido
 *
 * @export
 * @param {string} guarnicion
 * @return {*}  {boolean}
 */
export function EsGuarnicionValida(guarnicion: string): boolean {

    const esValida: boolean = guarniciones.includes(guarnicion);

    return esValida;
}