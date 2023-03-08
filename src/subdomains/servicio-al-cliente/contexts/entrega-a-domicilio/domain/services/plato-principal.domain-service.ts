
/**
 *Servicio para los comandos de la entidad Plato principl
 *
 * @export
 * @interface IPlatoPrincipalDomainService
 * @template PlatoPrincipalDomainEntityBase
 */
export interface IPlatoPrincipalDomainService<PlatoPrincipalDomainEntityBase> {
    crearPlatoPrincipal(platoPrincipal: PlatoPrincipalDomainEntityBase): Promise<PlatoPrincipalDomainEntityBase>;
    cambiarNombre(platoPrincipalId: string, nuevoNombre: string): Promise<string>;
    cambiarGuarnicion(platoPrincipalId: string, nuevaGuarnicion: string): Promise<string>;
}