
/**
 *Servicio para los comandos de la entidad Cliente
 *
 * @export
 * @interface IClienteDomainService
 * @template ClienteDomainEntityBase
 */
export interface IClienteDomainService<ClienteDomainEntityBase> {
    crearCliente(cliente: ClienteDomainEntityBase): Promise<ClienteDomainEntityBase>;
    cambiarNombre(clienteId: string, nuevoNombre: string): Promise<string>;
    cambiarDireccion(clienteId: string, nuevaDireccion: string): Promise<string>;
}