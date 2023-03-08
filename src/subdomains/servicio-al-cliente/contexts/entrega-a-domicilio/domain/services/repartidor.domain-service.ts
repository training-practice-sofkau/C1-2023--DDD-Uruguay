
/**
 *Servicio para los comandos de la entidad Repartidor
 *
 * @export
 * @interface IRepartidorDomainService
 * @template RepartidorDomainEntityBase
 */
export interface IRepartidorDomainService<RepartidorDomainEntityBase> {
    crearRepartidor(repartidor: RepartidorDomainEntityBase): Promise<RepartidorDomainEntityBase>;
    cambiarVehiculo(repartidorId: string, nuevoVehiculo: string): Promise<string>;
    cambiarNombre(repartidorId: string, nuevoNombre: string): Promise<string>;
}