import { Injectable } from "@nestjs/common";

import { IPostreDomainService } from "../../../../../../domain/services";
import { PostreMySqlEntity } from "../../entities/pedido";
import { PostreMySqlRepository } from '../../repositories/pedido';

@Injectable()
export class PostreMySqlService
    implements IPostreDomainService<PostreMySqlEntity> {

    constructor(
        private readonly postreRepository: PostreMySqlRepository,
    ) { }
    
    
    crearPostre(postre: PostreMySqlEntity): Promise<PostreMySqlEntity> {
        return this.postreRepository.create(postre);
    }
    
    getPostre(postreId: string): Promise<PostreMySqlEntity> {
        return this.postreRepository.findById(postreId);
    }
    
    cambiarNombre(postreId: string, nuevoNombre: string): Promise<string> {
        return this.postreRepository.updateNombre(postreId, nuevoNombre);
    }
    
    cambiarTamaño(postreId: string, nuevoTamaño: string): Promise<string> {
        return this.postreRepository.updateTamanio(postreId, nuevoTamaño);
    }

    cambiarEsParaVeganos(postreId: string, nuevoEstado: boolean): Promise<boolean> {
        return this.postreRepository.updateEsParaVeganos(postreId, nuevoEstado);
    }
}