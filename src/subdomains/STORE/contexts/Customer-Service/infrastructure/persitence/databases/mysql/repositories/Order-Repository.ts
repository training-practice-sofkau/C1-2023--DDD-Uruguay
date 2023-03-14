import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IRepositoriBase } from './base/IRepository.base';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { OrderEntityDb } from "../entities";

@Injectable()
export class OrderRepository
    implements IRepositoriBase<OrderEntityDb> {


    constructor(@InjectRepository(OrderEntityDb)
    private readonly repository: Repository<OrderEntityDb>) { }


  
    async findById(orderId: string): Promise<OrderEntityDb> {
        const Order = await this.repository.findOneBy({ orderId })
        if (!Order) throw new BadRequestException(`Order con id ${orderId} no encontrado`)
        return Order
    }

     async   create(entity: OrderEntityDb): Promise<OrderEntityDb> {
     return this.repository.create(entity)    }

   async  update(orderId: string, newOrder: OrderEntityDb): Promise<OrderEntityDb> {
        const Order = await this.repository.findOneBy({ orderId });
        if (Order) {
          const newEntity = {
            ...newOrder,
            Order,
          };
          return this.repository.save(newEntity);
        }
        throw new NotFoundException(`Order con id ${orderId} no encontrado`);
    }

    

   async  delete(orderId: string): Promise<boolean> {
        const Order = await this.repository.findOneBy({ orderId });
        if (Order) {
          await this.repository.remove(Order);
          return true;
        }
        throw new NotFoundException(`Order con id ${orderId} no encontrado`);
      }    }




