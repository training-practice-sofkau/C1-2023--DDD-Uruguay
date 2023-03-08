
const vehiculos: string[] = [
    "bicicleta",
    "moto",
    "auto",
    "cuatriciclo",
    "camioneta"
];

/**
 *Funsión que verifica si un vahículo es válido
 *
 * @export
 * @param {string} vehiculo
 * @return {*}  {boolean}
 */
export function EsVehiculo(vehiculo: string): boolean {

    const esValida: boolean = vehiculos.includes(vehiculo);

    return esValida;
}