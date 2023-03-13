import {
    BebidaDomainEntityBase,
    EntradaDomainEntityBase,
    PedidoDomainEntityBase,
    PlatoPrincipalDomainEntityBase,
    PostreDomainEntityBase
} from "../entities/pedido";

/**
 *Servicio para los comandos del agregado Pedido
 *
 * @export
 * @interface IPedidoDomainService
 * @template PedidoAggregate
 */
export interface IPedidoDomainService<PedidoAggregate> {
    crearPedido(pedido: PedidoAggregate): Promise<PedidoAggregate>;
    obtenerPedido(pedidoId: string): Promise<PedidoDomainEntityBase>;
    cambiarEstadoPedido(pedidoId: string, nuevoEstado: string): Promise<string>;
    cambiarPrecioPedido(pedidoId: string, nuevoPRecio: number): Promise<number>;
    
    crearEntrada(entrada: EntradaDomainEntityBase): Promise<EntradaDomainEntityBase>;
    cambiarNombreEntrada(entradaId: string, nuevoNombre: string): Promise<string>;
    
    crearPlatoPrincipal(platoPrincipal: PlatoPrincipalDomainEntityBase): Promise<PlatoPrincipalDomainEntityBase>;
    cambiarNombrePlatoPrincipal(platoPrincipalId: string, nuevoNombre: string): Promise<string>;
    cambiarGuarnicionPlatoPrincipal(platoPrincipalId: string, nuevaGuarnicion: string): Promise<string>;
   
    crearBebida(bebida: BebidaDomainEntityBase): Promise<BebidaDomainEntityBase>;
    obtenerBebida(bebidaId: string): Promise<BebidaDomainEntityBase>;
    cambiarNombreBebida(bebidaId: string, nuevoNombre: string): Promise<string>;
    cambiarTamañoBebida(bebidaId: string, nuevoTamaño: string): Promise<string>;
   
    crearPostre(postre: PostreDomainEntityBase): Promise<PostreDomainEntityBase>;
    cambiarNombrePostre(postreId: string, nuevoNombre: string): Promise<string>;
    cambiarTamañoPostre(postreId: string, nuevoTamaño: string): Promise<string>;
    cambiarPostreEsPAraVeganos(postreId: string, nuevoEstado: boolean): Promise<boolean>;
}