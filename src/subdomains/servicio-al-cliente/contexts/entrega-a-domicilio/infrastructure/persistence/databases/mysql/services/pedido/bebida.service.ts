import { Injectable } from "@nestjs/common";

import { IBebidaDomainService } from "../../../../../../domain/services";
import { BebidaMySqlEntity } from "../../entities/pedido";
import { BebidaMySqlRepository } from '../../repositories/pedido';

@Injectable()
export class BebidaMySqlService
    implements IBebidaDomainService<BebidaMySqlEntity> {

    constructor(
        private readonly bebidaRepository: BebidaMySqlRepository,
    ) { }
    
    
    crearBebida(bebida: BebidaMySqlEntity): Promise<BebidaMySqlEntity> {
        return this.bebidaRepository.create(bebida);
    }
    
    obtenerBebida(bebidaId: string): Promise<BebidaMySqlEntity> {
        return this.bebidaRepository.findById(bebidaId);
    }
    
    cambiarNombre(bebidaId: string, nuevoNombre: string): Promise<string> {
        return this.bebidaRepository.updateNombre(bebidaId, nuevoNombre);
    }
    
    cambiarTamaño(bebidaId: string, nuevoTamaño: string): Promise<string> {
        return this.bebidaRepository.updateTamanio(bebidaId, nuevoTamaño);
    }

}