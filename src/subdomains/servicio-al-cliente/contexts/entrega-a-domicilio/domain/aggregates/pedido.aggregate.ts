import {
    IBebidaDomainService,
    IEntradaDomainService,
    IPostreDomainService,
    IPlatoPrincipalDomainService,
    IPedidoDomainService
} from "../services";

import {
    BebidaCreadaEventPublisherBase,
    EstadoPedidoCambiadoEventPublisherBase,
    PedidoCreadoEventPublisherBase,
    PostreCreadoEventPublisherBase,
    PrecioPedidoCambiadoEventPublisherBase,
    NombrePlatoPrincipalCambiadoEventPublisherBase,
    GuarnicionPlatoPrincipalCambiadoEventPublisherBase,
    NombrePostreCambiadoEventPublisherBase,
    NombreBebidaCambiadoEventPublisherBase,
    TamanioBebidaCambiadoEventPublisherBase,
    TamanioPostreCambiadoEventPublisherBase,
    PostreEsParaVeganosCambiadoEventPublisherBase
} from '../events/publishers/pedido';

import {
    BebidaDomainEntityBase,
    EntradaDomainEntityBase,
    PostreDomainEntityBase,
    PlatoPrincipalDomainEntityBase,
    PedidoDomainEntityBase
} from "../entities";

import { AggregateRootException } from '../../../../../../libs/sofka/exceptions';

import {
    NombreEntradaCambiadoEventPublisherBase,
    EntradaCreadaEventPublisherBase,
    PlatoPrincipalCreadoEventPublisherBase,
} from "../events/publishers/pedido";

export class PedidoAggregate
    implements IPedidoDomainService<PedidoDomainEntityBase> {

        private readonly pedidoService?: IPedidoDomainService<PedidoDomainEntityBase>;
        private readonly entradaService?: IEntradaDomainService<EntradaDomainEntityBase>;
        private readonly platoPrincipalService?: IPlatoPrincipalDomainService<PlatoPrincipalDomainEntityBase>;
        private readonly postreService?: IPostreDomainService<PostreDomainEntityBase>;
        private readonly bebidaService?: IBebidaDomainService<BebidaDomainEntityBase>;
        private readonly pedidoCreadoEventPublisherBase?: PedidoCreadoEventPublisherBase;
        private readonly entradaCreadaEventPublisherBase?: EntradaCreadaEventPublisherBase;
        private readonly platoPrincipalCreadoEventPublisherBase?: PlatoPrincipalCreadoEventPublisherBase;
        private readonly postreCreadoEventPublisherBase?: PostreCreadoEventPublisherBase;
        private readonly bebidaCreadaEventPublisherBase?: BebidaCreadaEventPublisherBase;
        private readonly estadoPedidoCambiadoEventPublisherBase?: EstadoPedidoCambiadoEventPublisherBase;
        private readonly precioPedidoCambiadoEventPublisherBase?: PrecioPedidoCambiadoEventPublisherBase;
        private readonly nombreEntradaCambiadoEventPublisherBase?: NombreEntradaCambiadoEventPublisherBase;
        private readonly nombrePlatoPrincipalCambiadoEventPublisherBase?: NombrePlatoPrincipalCambiadoEventPublisherBase;
        private readonly guarnicionPlatoPrincipalCambiadoEventPublisherBase?: GuarnicionPlatoPrincipalCambiadoEventPublisherBase;
        private readonly nombrePostreCambiadoEventPublisherBase?: NombrePostreCambiadoEventPublisherBase;
        private readonly nombreBebidaCambiadoEventPublisherBase?: NombreBebidaCambiadoEventPublisherBase;
        private readonly tamanioBebidaCambiadoEventPublisherBase?: TamanioBebidaCambiadoEventPublisherBase;
        private readonly tamanioPostreCambiadoEventPublisherBase?: TamanioPostreCambiadoEventPublisherBase;
        private readonly postreEsParaVeganosCambiadoEventPublisherBase?: PostreEsParaVeganosCambiadoEventPublisherBase;

        constructor(
            {
                pedidoService,
                entradaService,
                platoPrincipalService,
                pedidoCreadoEventPublisherBase,
                entradaCreadaEventPublisherBase,
                platoPrincipalCreadoEventPublisherBase,
                estadoPedidoCambiadoEventPublisherBase,
                precioPedidoCambiadoEventPublisherBase,
                nombreEntradaCambiadoEventPublisherBase,
                guarnicionPlatoPrincipalCambiadoEventPublisherBase,
                nombrePostreCambiadoEventPublisherBase,
                nombreBebidaCambiadoEventPublisherBase,
                tamanioBebidaCambiadoEventPublisherBase,
                tamanioPostreCambiadoEventPublisherBase,
                postreEsParaVeganosCambiadoEventPublisherBase
            }: {
                pedidoService?: IPedidoDomainService<PedidoDomainEntityBase>,
                entradaService?: IEntradaDomainService<EntradaDomainEntityBase>,
                platoPrincipalService?: IPlatoPrincipalDomainService<PlatoPrincipalDomainEntityBase>,
                pedidoCreadoEventPublisherBase?: PedidoCreadoEventPublisherBase,
                entradaCreadaEventPublisherBase?: EntradaCreadaEventPublisherBase,
                platoPrincipalCreadoEventPublisherBase?: PlatoPrincipalCreadoEventPublisherBase,
                estadoPedidoCambiadoEventPublisherBase?: EstadoPedidoCambiadoEventPublisherBase,
                precioPedidoCambiadoEventPublisherBase?: PrecioPedidoCambiadoEventPublisherBase,
                nombreEntradaCambiadoEventPublisherBase?: NombreEntradaCambiadoEventPublisherBase,
                guarnicionPlatoPrincipalCambiadoEventPublisherBase?: GuarnicionPlatoPrincipalCambiadoEventPublisherBase,
                nombrePostreCambiadoEventPublisherBase?: NombrePostreCambiadoEventPublisherBase,
                nombreBebidaCambiadoEventPublisherBase?: NombreBebidaCambiadoEventPublisherBase,
                tamanioBebidaCambiadoEventPublisherBase?: TamanioBebidaCambiadoEventPublisherBase,
                tamanioPostreCambiadoEventPublisherBase?: TamanioPostreCambiadoEventPublisherBase,
                postreEsParaVeganosCambiadoEventPublisherBase?: PostreEsParaVeganosCambiadoEventPublisherBase
            }
        ) {
            this.pedidoService = pedidoService,
            this.entradaService = entradaService,
            this.platoPrincipalService = platoPrincipalService,
            this.pedidoCreadoEventPublisherBase = pedidoCreadoEventPublisherBase,
            this.entradaCreadaEventPublisherBase = entradaCreadaEventPublisherBase,
            this.platoPrincipalCreadoEventPublisherBase = platoPrincipalCreadoEventPublisherBase,
            this.estadoPedidoCambiadoEventPublisherBase = estadoPedidoCambiadoEventPublisherBase,
            this.precioPedidoCambiadoEventPublisherBase = precioPedidoCambiadoEventPublisherBase,
            this.nombreEntradaCambiadoEventPublisherBase = nombreEntradaCambiadoEventPublisherBase,
            this.guarnicionPlatoPrincipalCambiadoEventPublisherBase = guarnicionPlatoPrincipalCambiadoEventPublisherBase,
            this.nombrePostreCambiadoEventPublisherBase = nombrePostreCambiadoEventPublisherBase,
            this.nombreBebidaCambiadoEventPublisherBase = nombreBebidaCambiadoEventPublisherBase,
            this.tamanioBebidaCambiadoEventPublisherBase = tamanioBebidaCambiadoEventPublisherBase,
            this.tamanioPostreCambiadoEventPublisherBase = tamanioPostreCambiadoEventPublisherBase,
            this.postreEsParaVeganosCambiadoEventPublisherBase = postreEsParaVeganosCambiadoEventPublisherBase

        }
    
        async crearPedido(pedido: PedidoDomainEntityBase): Promise<PedidoDomainEntityBase> {
            if(this.pedidoService && this.pedidoCreadoEventPublisherBase) {
                const result = await this.pedidoService.crearPedido(pedido);
                this.pedidoCreadoEventPublisherBase.response = result;
                this.pedidoCreadoEventPublisherBase.publish();
                return this.pedidoCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "PedidoService" y/o "pedidoCreadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarEstadoPedido(pedidoId: string, nuevoEstado: string): Promise<string> {
            if(this.pedidoService && this.estadoPedidoCambiadoEventPublisherBase) {
                const result = await this.pedidoService.cambiarEstadoPedido(pedidoId, nuevoEstado);
                this.estadoPedidoCambiadoEventPublisherBase.response = result;
                this.estadoPedidoCambiadoEventPublisherBase.publish();
                return this.estadoPedidoCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "PedidoService" y/o "estadoPedidoCambiadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarPrecioPedido(pedidoId: string, nuevoPRecio: number): Promise<number> {
            if(this.pedidoService && this.precioPedidoCambiadoEventPublisherBase) {
                const result = await this.pedidoService.cambiarPrecioPedido(pedidoId, nuevoPRecio);
                this.precioPedidoCambiadoEventPublisherBase.response = result;
                this.precioPedidoCambiadoEventPublisherBase.publish();
                return this.precioPedidoCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "PedidoService" y/o "precioPedidoCambiadoEventPublisherBase" no están definidos'
            )
        }

        async crearEntrada(entrada: EntradaDomainEntityBase): Promise<EntradaDomainEntityBase> {
            if(this.entradaService && this.entradaCreadaEventPublisherBase) {
                const result = await this.entradaService.crearEntrada(entrada);
                this.entradaCreadaEventPublisherBase.response = result;
                this.entradaCreadaEventPublisherBase.publish();
                return this.entradaCreadaEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "entradaService" y/o "entradaCreadaEventPublisherBase" no están definidos'
            )
        }

        async cambiarNombreEntrada(entradaId: string, nuevoNombre: string): Promise<string> {
            if(this.entradaService && this.nombreEntradaCambiadoEventPublisherBase) {
                const result = await this.entradaService.cambiarNombre(entradaId, nuevoNombre);
                this.nombreEntradaCambiadoEventPublisherBase.response = result;
                this.nombreEntradaCambiadoEventPublisherBase.publish();
                return this.nombreEntradaCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "entradaService" y/o "nombreEntradaCambiadoEventPublisherBase" no están definidos'
            )
        }

        async crearPlatoPrincipal(platoPrincipal: PlatoPrincipalDomainEntityBase): Promise<PlatoPrincipalDomainEntityBase> {
            if(this.platoPrincipalService && this.platoPrincipalCreadoEventPublisherBase) {
                const result = await this.platoPrincipalService.crearPlatoPrincipal(platoPrincipal);
                this.platoPrincipalCreadoEventPublisherBase.response = result;
                this.platoPrincipalCreadoEventPublisherBase.publish();
                return this.platoPrincipalCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "platoPrincipalService" y/o "platoPrincipalCreadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarNombrePlatoPrincipal(platoPrincipalId: string, nuevoNombre: string): Promise<string> {
            if(this.platoPrincipalService && this.nombrePlatoPrincipalCambiadoEventPublisherBase) {
                const result = await this.platoPrincipalService.cambiarNombre(platoPrincipalId, nuevoNombre);
                this.nombrePlatoPrincipalCambiadoEventPublisherBase.response = result;
                this.nombrePlatoPrincipalCambiadoEventPublisherBase.publish();
                return this.nombrePlatoPrincipalCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "platoPrincipalService" y/o "nombrePlatoPrincipalCambiadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarGuarnicionPlatoPrincipal(platoPrincipalId: string, nuevaGuarnicion: string): Promise<string> {
            if(this.platoPrincipalService && this.guarnicionPlatoPrincipalCambiadoEventPublisherBase) {
                const result = await this.platoPrincipalService.cambiarGuarnicion(platoPrincipalId, nuevaGuarnicion);
                this.guarnicionPlatoPrincipalCambiadoEventPublisherBase.response = result;
                this.guarnicionPlatoPrincipalCambiadoEventPublisherBase.publish();
                return this.guarnicionPlatoPrincipalCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "platoPrincipalService" y/o "guarnicionPlatoPrincipalCambiadoEventPublisherBase" no están definidos'
            )
        }

        async crearBebida(bebida: BebidaDomainEntityBase): Promise<BebidaDomainEntityBase> {
            if(this.bebidaService && this.bebidaCreadaEventPublisherBase) {
                const result = await this.bebidaService.crearBebida(bebida);
                this.bebidaCreadaEventPublisherBase.response = result;
                this.bebidaCreadaEventPublisherBase.publish();
                return this.bebidaCreadaEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "bebidaService" y/o "bebidaCreadaEventPublisherBase" no están definidos'
            )
        }

        async cambiarNombreBebida(bebidaId: string, nuevoNombre: string): Promise<string> {
            if(this.bebidaService && this.nombreBebidaCambiadoEventPublisherBase) {
                const result = await this.bebidaService.cambiarNombre(bebidaId, nuevoNombre);
                this.nombreBebidaCambiadoEventPublisherBase.response = result;
                this.nombreBebidaCambiadoEventPublisherBase.publish();
                return this.nombreBebidaCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "bebidaService" y/o "nombreBebidaCambiadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarTamañoBebida(bebidaId: string, nuevoTamaño: string): Promise<string> {
            if(this.bebidaService && this.tamanioBebidaCambiadoEventPublisherBase) {
                const result = await this.bebidaService.cambiarTamaño(bebidaId, nuevoTamaño);
                this.tamanioBebidaCambiadoEventPublisherBase.response = result;
                this.tamanioBebidaCambiadoEventPublisherBase.publish();
                return this.tamanioBebidaCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "bebidaService" y/o "tamanioBebidaCambiadoEventPublisherBase" no están definidos'
            )
        }

        async crearPostre(postre: PostreDomainEntityBase): Promise<PostreDomainEntityBase> {
            if(this.postreService && this.postreCreadoEventPublisherBase) {
                const result = await this.postreService.crearPostre(postre);
                this.postreCreadoEventPublisherBase.response = result;
                this.postreCreadoEventPublisherBase.publish();
                return this.postreCreadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "postreService" y/o "postreCreadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarNombrePostre(postreId: string, nuevoNombre: string): Promise<string> {
            if(this.postreService && this.nombrePostreCambiadoEventPublisherBase) {
                const result = await this.postreService.cambiarNombre(postreId, nuevoNombre);
                this.nombrePostreCambiadoEventPublisherBase.response = result;
                this.nombrePostreCambiadoEventPublisherBase.publish();
                return this.nombrePostreCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "postreService" y/o "nombrePostreCambiadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarTamañoPostre(postreId: string, nuevoTamaño: string): Promise<string> {
            if(this.postreService && this.tamanioPostreCambiadoEventPublisherBase) {
                const result = await this.postreService.cambiarTamaño(postreId, nuevoTamaño);
                this.tamanioPostreCambiadoEventPublisherBase.response = result;
                this.tamanioPostreCambiadoEventPublisherBase.publish();
                return this.tamanioPostreCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "postreService" y/o "tamanioPostreCambiadoEventPublisherBase" no están definidos'
            )
        }

        async cambiarPostreEsPAraVeganos(postreId: string, nuevoEstado: boolean): Promise<boolean> {
            if(this.postreService && this.postreEsParaVeganosCambiadoEventPublisherBase) {
                const result = await this.postreService.cambiarEsParaVeganos(postreId, nuevoEstado);
                this.postreEsParaVeganosCambiadoEventPublisherBase.response = result;
                this.postreEsParaVeganosCambiadoEventPublisherBase.publish();
                return this.postreEsParaVeganosCambiadoEventPublisherBase.response;
            }
            throw new AggregateRootException(
                'PedidoAggregate "postreService" y/o "postreEsParaVeganosCambiadoEventPublisherBase" no están definidos'
            )
        }

        
    }