import { Injectable } from "@nestjs/common";
import { IConsumptionDomainService } from "../../../../../domain";
import { ConsumptionMySqlEntity } from "../entities";
import { ConsumptionRepository } from '../repositories';

@Injectable()
export class ConsumptionMySqlService
    implements IConsumptionDomainService<ConsumptionMySqlEntity> {

    constructor(
        private readonly consumptionRepository: ConsumptionRepository,
    ) { }

    updateExtra(entity: ConsumptionMySqlEntity): Promise<ConsumptionMySqlEntity> {
        return this.consumptionRepository.update(entity.consumptionId, entity);
    }

    updateMiniBar(entity: ConsumptionMySqlEntity): Promise<ConsumptionMySqlEntity> {
        return this.consumptionRepository.update(entity.consumptionId, entity)
    }

}