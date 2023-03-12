import { RepairsDomainEntityBase } from "../../entities/support-ticket/repairs.domain-entity/repairs.domain-entity";
import { IAddRepairsCommand } from "../../interfaces/commands/support-ticket";

export interface IRepairsDomainService {

    AddRepair(repairData: RepairsDomainEntityBase): Promise<boolean>;    

    ChangeWorkStatus(repairData: RepairsDomainEntityBase): Promise<boolean>;
}