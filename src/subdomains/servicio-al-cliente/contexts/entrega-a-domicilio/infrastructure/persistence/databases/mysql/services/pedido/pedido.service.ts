import { Injectable } from "@nestjs/common";

import {
    EntradaMySqlEntity,
    BebidaMySqlEntity,
    PlatoPrincipalMySqlEntity,
    PostreMySqlEntity,
    PedidoMySqlEntity
} from "../../entities/pedido";

import { IPedidoDomainService } from "../../../../../../domain/services";
import { PedidoMySqlRepository } from '../../repositories/pedido';

import {
    EntradaMySqlService,
    PostreMySqlService,
    PlatoPrincipalMySqlService,
    BebidaMySqlService
} from "./";

@Injectable()
export class PedidoMySqlService
    implements IPedidoDomainService<PedidoMySqlEntity> {

    constructor(
        private readonly pedidoRepository: PedidoMySqlRepository,
        private readonly entradaService: EntradaMySqlService,
        private readonly postreService: PostreMySqlService,
        private readonly platoPrincipalService: PlatoPrincipalMySqlService,
        private readonly bebidaService: BebidaMySqlService,
    ) { }


    crearPedido(pedido: PedidoMySqlEntity): Promise<PedidoMySqlEntity> {
        return this.pedidoRepository.create(pedido);
    }
    
    obtenerPedido(pedidoId: string): Promise<PedidoMySqlEntity> {
        return this.pedidoRepository.findById(pedidoId);
    }

    cambiarEstadoPedido(pedidoId: string, nuevoEstado: string): Promise<string> {
        return this.pedidoRepository.updateEstado(pedidoId, nuevoEstado);
    }

    cambiarPrecioPedido(pedidoId: string, nuevoPrecio: number): Promise<number> {
        return this.pedidoRepository.updatePrecio(pedidoId, nuevoPrecio);
    }


    crearEntrada(entrada: EntradaMySqlEntity): Promise<EntradaMySqlEntity> {
        return this.entradaService.crearEntrada(entrada);
    }

    cambiarNombreEntrada(entradaId: string, nuevoNombre: string): Promise<string> {
        return this.entradaService.cambiarNombre(entradaId, nuevoNombre);
    }

    crearPlatoPrincipal(platoPrincipal: PlatoPrincipalMySqlEntity): Promise<PlatoPrincipalMySqlEntity> {
        return this.platoPrincipalService.crearPlatoPrincipal(platoPrincipal);
    }

    cambiarNombrePlatoPrincipal(platoPrincipalId: string, nuevoNombre: string): Promise<string> {
        return this.platoPrincipalService.cambiarNombre(platoPrincipalId, nuevoNombre);
    }

    cambiarGuarnicionPlatoPrincipal(platoPrincipalId: string, nuevaGuarnicion: string): Promise<string> {
        return this.platoPrincipalService.cambiarGuarnicion(platoPrincipalId, nuevaGuarnicion);
    }

    crearBebida(bebida: BebidaMySqlEntity): Promise<BebidaMySqlEntity> {
        return this.bebidaService.crearBebida(bebida);
    }

    obtenerBebida(bebidaId: string): Promise<BebidaMySqlEntity> {
        return this.bebidaService.obtenerBebida(bebidaId);
    }

    cambiarNombreBebida(bebidaId: string, nuevoNombre: string): Promise<string> {
        return this.bebidaService.cambiarNombre(bebidaId, nuevoNombre);
    }

    cambiarTamañoBebida(bebidaId: string, nuevoTamaño: string): Promise<string> {
        return this.bebidaService.cambiarTamaño(bebidaId, nuevoTamaño);
    }

    crearPostre(postre: PostreMySqlEntity): Promise<PostreMySqlEntity> {
        return this.postreService.crearPostre(postre);
    }

    cambiarNombrePostre(postreId: string, nuevoNombre: string): Promise<string> {
        return this.postreService.cambiarNombre(postreId, nuevoNombre);
    }

    cambiarTamañoPostre(postreId: string, nuevoTamaño: string): Promise<string> {
        return this.postreService.cambiarTamaño(postreId, nuevoTamaño);
    }

    cambiarPostreEsPAraVeganos(postreId: string, nuevoEstado: boolean): Promise<boolean> {
        return this.postreService.cambiarEsParaVeganos(postreId, nuevoEstado);
    }

}