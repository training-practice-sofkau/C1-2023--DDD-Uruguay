import { Injectable } from "@nestjs/common";

import { IEntradaDomainService } from "../../../../../../domain/services";
import { EntradaMySqlEntity } from "../../entities/pedido";
import { EntradaMySqlRepository } from '../../repositories/pedido';

@Injectable()
export class EntradaMySqlService
    implements IEntradaDomainService<EntradaMySqlEntity> {

    constructor(
        private readonly entradaRepository: EntradaMySqlRepository,
    ) { }


    crearEntrada(entrada: EntradaMySqlEntity): Promise<EntradaMySqlEntity> {
        return this.entradaRepository.create(entrada);
    }

    getEntrada(entradaId: string): Promise<EntradaMySqlEntity> {
        return this.entradaRepository.findById(entradaId);
    }

    cambiarNombre(entradaId: string, nuevoNombre: string): Promise<string> {
        return this.entradaRepository.updateNombre(entradaId, nuevoNombre);
    }

}