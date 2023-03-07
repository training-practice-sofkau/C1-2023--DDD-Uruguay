import { Injectable } from '@nestjs/common';
import { ClientDomainBase } from '../../../../domain/entities/Order-domain/client-domain-entity';
import { MangaDomainBase } from '../../../../domain/entities/Order-domain/manga-domain-entity';
import { OrderDomainEntityBase } from '../../../../domain/entities/Order-domain/Order-domain-entity';
import { IorderDomainService } from '../../../../domain/services/Order-domain-service';

@Injectable()
export class OrderService implements IorderDomainService {

  private readonly datos: any[] = [];


}