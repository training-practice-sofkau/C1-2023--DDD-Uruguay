import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Repository } from "typeorm";
import { InvoiceMySqlEntity } from "../entities/invoice.entity";
import { IRepository } from "./base";

@Injectable()
export class InvoiceRepository
  implements IRepository<InvoiceMySqlEntity>
{
  constructor(
    @InjectRepository(InvoiceMySqlEntity)
    private readonly repository: Repository<InvoiceMySqlEntity>,
  ) { }

  async findAll(): Promise<InvoiceMySqlEntity[]> {
    return await this.repository.find();
  }

  async findById(
    invoiceId: string,
  ): Promise<InvoiceMySqlEntity> {
    const entity = await this.repository.findOneBy({ invoiceId });
    if (entity) return entity;
    throw new BadRequestException(
      `El ID "${invoiceId}" no existe en base de datos`,
    );
  }

  async create(
    entity: InvoiceMySqlEntity,
  ): Promise<InvoiceMySqlEntity | null> {
    return await this.repository.save(entity);
  }

  async update(
    invoiceId: string,
    entity: InvoiceMySqlEntity,
  ): Promise<InvoiceMySqlEntity> {
    let entityToUpdate = await this.repository.findOneBy({ invoiceId });
    if (entityToUpdate) {
      entityToUpdate = {
        ...entityToUpdate,
        ...entity,
      } as InvoiceMySqlEntity;
      return await this.repository.save(entityToUpdate);
    }
    throw new BadRequestException(
      `El ID "${invoiceId}" no existe en base de datos`,
    );
  }

  async delete(invoiceId: string): Promise<boolean> {
    const entityToDelete = await this.repository.findOneBy({ invoiceId });
    if (entityToDelete) {
      const response = await this.repository.save(entityToDelete);
      return response ? true : false;
    }
    throw new BadRequestException(
      `El ID "${invoiceId}" no existe en base de datos`,
    );
  }
}
