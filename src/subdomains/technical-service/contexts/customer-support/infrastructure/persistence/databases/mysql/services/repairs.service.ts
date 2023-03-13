import { Injectable } from '@nestjs/common';
import { RepairsDomainEntityBase } from 'src/subdomains/technical-service/contexts/customer-support/domain/entities/support-ticket';
import { IRepairsDomainService } from '../../../../../domain/services';
import { RepairsRepository } from '../repositories/repairs.repository';

@Injectable()
export class RepairsMySqlService implements IRepairsDomainService{

    constructor(
        private readonly repairsRepository: RepairsRepository
    ){}


    
    AddRepair(repairData: RepairsDomainEntityBase): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    ChangeWorkStatus(repairData: RepairsDomainEntityBase): Promise<boolean> {
        throw new Error('Method not implemented.');
    }



//TODO: implementar metodos
    
    
}