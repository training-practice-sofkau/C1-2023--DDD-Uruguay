import { Injectable } from '@nestjs/common';
import { WarrantyDomainEntityBase } from '../../../../../domain/entities/invoice';
import { IWarrantyDomainService } from '../../../../../domain/services';
import { WarrantyRepository } from '../repositories/warranty.repository';

@Injectable()
export class WarrantyMySqlService implements IWarrantyDomainService{

    constructor(
        private readonly warrantyRepository: WarrantyRepository
    ){}

    /**
     * Changes Warranty End Date
     *
     * @param {WarrantyDomainEntityBase} data
     * @return {*}  {Promise<boolean>}
     * @memberof WarrantyMySqlService
     */
    async ChangeWarrantyEndDate(data: WarrantyDomainEntityBase): Promise<boolean> {
         
        if(this.warrantyRepository.update(data)) return await true;

        return false;
    }


    /**
     * Changes Warranty Status
     *
     * @param {WarrantyDomainEntityBase} data
     * @return {*}  {Promise<boolean>}
     * @memberof WarrantyMySqlService
     */
    async ChangeWarrantyStatus(data: WarrantyDomainEntityBase): Promise<boolean> {

        if(this.warrantyRepository.update(data)) return await true;

        return false;
    }
    
}