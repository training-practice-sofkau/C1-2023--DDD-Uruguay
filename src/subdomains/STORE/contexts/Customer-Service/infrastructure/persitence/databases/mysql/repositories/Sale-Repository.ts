import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { saleEntityBd } from '../entities/Sale-entity';
import { IRepositoriBase } from './base';
export class SaleRepository
    implements IRepositoriBase<saleEntityBd> {


    constructor(@InjectRepository(saleEntityBd)
    private readonly repository: Repository<saleEntityBd>) { }
       
        
  async findById(IDSale: string): Promise<saleEntityBd> {
    const Seller = await this.repository.findOneBy({ IDSale })
    if (!Seller) throw new BadRequestException(`Venta con id ${IDSale} no encontrado`)
    return Seller;
    }
async create(entity: saleEntityBd): Promise<saleEntityBd> {
     return this.repository.create(entity)
}
async update(IDSale: string, SaleEntity: saleEntityBd): Promise<saleEntityBd> {
    const sale = await this.repository.findOneBy({ IDSale });
    if (sale) {
        const newEntity = {
            ...SaleEntity,
            sale,
        };
        return this.repository.save(newEntity);
    }
    throw new NotFoundException(`Vendedor con id ${IDSale} no encontrado`);    }
async delete(IDSale: string): Promise<boolean> {
    const Seller = await this.repository.findOneBy({ IDSale });
    if (Seller) {
        await this.repository.remove(Seller);
        return true;
    }
    throw new NotFoundException(`Vendedor con id ${IDSale} no encontrado`);    }
    }