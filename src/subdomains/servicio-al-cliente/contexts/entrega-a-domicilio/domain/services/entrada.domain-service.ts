
/**
 *Servicio para los comandos de la entidad Entrada
 *
 * @export
 * @interface IEntradaDomainService
 * @template EntradaDomainEntityBase
 */
export interface IEntradaDomainService<EntradaDomainEntityBase> {
    crearEntrada(entrada: EntradaDomainEntityBase): Promise<EntradaDomainEntityBase>;
    cambiarNombre(entradaId: string, nuevoNombre: string): Promise<string>;
}