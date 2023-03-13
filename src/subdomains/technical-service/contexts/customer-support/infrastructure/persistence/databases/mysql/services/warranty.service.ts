import { Injectable } from '@nestjs/common';
import { WarrantyDomainEntityBase } from '../../../../../domain/entities/invoice';
import { IWarrantyDomainService } from '../../../../../domain/services';
import { WarrantyRepository } from '../repositories/warranty.repository';

@Injectable()
export class WarrantyMySqlService implements IWarrantyDomainService{

    constructor(
        private readonly warrantyRepository: WarrantyRepository
    ){}
    ChangeWarrantyEndDate(data: WarrantyDomainEntityBase): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    ChangeWarrantyStatus(data: WarrantyDomainEntityBase): Promise<boolean> {
        throw new Error('Method not implemented.');
    }


//TODO: implementar metodos
    
    
}