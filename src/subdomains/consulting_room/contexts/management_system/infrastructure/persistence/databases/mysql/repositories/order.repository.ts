import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Repository } from "typeorm";
import { IRepository } from "./base";
import { OrderMySqlEntity } from '../entities/order.entity';

@Injectable()
export class OrderRepository
  implements IRepository<OrderMySqlEntity>
{
  constructor(
    @InjectRepository(OrderMySqlEntity)
    private readonly repository: Repository<OrderMySqlEntity>,
  ) { }

  async findAll(): Promise<OrderMySqlEntity[]> {
    return await this.repository.find();
  }

  async findById(
    orderId: string,
  ): Promise<OrderMySqlEntity> {
    const entity = await this.repository.findOneBy({ orderId });
    if (entity) return entity;
    throw new BadRequestException(
      `El ID "${orderId}" no existe en base de datos`,
    );
  }

  async create(
    entity: OrderMySqlEntity,
  ): Promise<OrderMySqlEntity | null> {
    return await this.repository.save(entity);
  }

  async update(
    orderId: string,
    entity: OrderMySqlEntity,
  ): Promise<OrderMySqlEntity> {
    let entityToUpdate = await this.repository.findOneBy({ orderId });
    if (entityToUpdate) {
      entityToUpdate = {
        ...entityToUpdate,
        ...entity,
      } as OrderMySqlEntity;
      return await this.repository.save(entityToUpdate);
    }
    throw new BadRequestException(
      `El ID "${orderId}" no existe en base de datos`,
    );
  }

  async delete(orderId: string): Promise<boolean> {
    const entityToDelete = await this.repository.findOneBy({ orderId });
    if (entityToDelete) {
      const response = await this.repository.save(entityToDelete);
      return response ? true : false;
    }
    throw new BadRequestException(
      `El ID "${orderId}" no existe en base de datos`,
    );
  }
}
