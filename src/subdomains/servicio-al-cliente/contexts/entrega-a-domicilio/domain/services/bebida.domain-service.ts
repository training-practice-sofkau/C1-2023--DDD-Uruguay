
/**
 *Servicio para los cmandos de la entidad Bebida
 *
 * @export
 * @interface IBebidaDomainService
 * @template BebidaDomainEntityBase
 */
export interface IBebidaDomainService<BebidaDomainEntityBase> {
    crearBebida(bebida: BebidaDomainEntityBase): Promise<BebidaDomainEntityBase>;
    obtenerBebida(bebidaId: string): Promise<BebidaDomainEntityBase>;
    cambiarNombre(bebidaId: string, nuevoNombre: string): Promise<string>;
    cambiarTamaño(bebidaId: string, nuevoTamaño: string): Promise<string>;
}