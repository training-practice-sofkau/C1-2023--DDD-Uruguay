import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Repository } from "typeorm";
import { ClientMySqlEntity } from "../entities/client.entity";
import { IRepository } from "./base";

@Injectable()
export class ClientRepository
  implements IRepository<ClientMySqlEntity>
{
  constructor(
    @InjectRepository(ClientMySqlEntity)
    private readonly repository: Repository<ClientMySqlEntity>,
  ) { }

  async findAll(): Promise<ClientMySqlEntity[]> {
    return await this.repository.find();
  }

  async findById(
    clientId: string,
  ): Promise<ClientMySqlEntity> {
    const entity = await this.repository.findOneBy({ clientId });
    if (entity) return entity;
    throw new BadRequestException(
      `El ID "${clientId}" no existe en base de datos`,
    );
  }

  async create(
    entity: ClientMySqlEntity,
  ): Promise<ClientMySqlEntity | null> {
    return await this.repository.save(entity);
  }

  async update(
    clientId: string,
    entity: ClientMySqlEntity,
  ): Promise<ClientMySqlEntity> {
    let entityToUpdate = await this.repository.findOneBy({ clientId });
    if (entityToUpdate) {
      entityToUpdate = {
        ...entityToUpdate,
        ...entity,
      } as ClientMySqlEntity;
      return await this.repository.save(entityToUpdate);
    }
    throw new BadRequestException(
      `El ID "${clientId}" no existe en base de datos`,
    );
  }

  async delete(clientId: string): Promise<boolean> {
    const entityToDelete = await this.repository.findOneBy({ clientId });
    if (entityToDelete) {
      const response = await this.repository.save(entityToDelete);
      return response ? true : false;
    }
    throw new BadRequestException(
      `El ID "${clientId}" no existe en base de datos`,
    );
  }
}
