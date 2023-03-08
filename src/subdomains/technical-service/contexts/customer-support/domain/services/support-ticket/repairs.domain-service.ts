import { IAddRepairsCommand, IChangeWorkStatusCommand } from "../../interfaces/commands/support-ticket";

export interface IRepairsDomainService {

    AddRepair(repairData: IAddRepairsCommand): Promise<boolean>;    

    ChangeWorkStatus(repairData: IChangeWorkStatusCommand): Promise<boolean>;
}