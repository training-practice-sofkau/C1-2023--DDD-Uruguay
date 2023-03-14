import { Injectable } from '@nestjs/common';
import { RepairsDomainEntityBase } from '../../../../../domain/entities/support-ticket';
import { IRepairsDomainService } from '../../../../../domain/services';
import { RepairsRepository } from '../repositories/repairs.repository';
import { RepairsMySqlEntity } from '../entities/repairs.entity';

@Injectable()
export class RepairsMySqlService implements IRepairsDomainService{

    constructor(
        private readonly repairsRepository: RepairsRepository
    ){}

    /**
     * Adds new Repair details Entity to DB
     *
     * @param {RepairsDomainEntityBase} repairData
     * @return {*}  {Promise<boolean>}
     * @memberof RepairsMySqlService
     */
    async AddRepair(repairData: RepairsDomainEntityBase): Promise<boolean> {

        if( this.repairsRepository.create(repairData  as RepairsMySqlEntity)) return await true;

        return false;
    }

    /**
     * Changes the Work status of Repair entity
     *
     * @param {RepairsDomainEntityBase} repairData
     * @return {*}  {Promise<boolean>}
     * @memberof RepairsMySqlService
     */
    async ChangeWorkStatus(repairData: RepairsDomainEntityBase): Promise<boolean> {

        if( this.repairsRepository.create(repairData as RepairsMySqlEntity)) return await true;

        return false;
    }

   
    
}