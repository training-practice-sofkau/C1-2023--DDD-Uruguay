import { RepairsDomainEntityBase } from "../../../../entities/support-ticket/repairs.domain-entity/repairs.domain-entity";
import {  WorkStatusChangedEventPublisherBase } from "../../../../events/publishers";
import {  IRepairsDomainService } from "../../../../services";


export const ChangeWorkStatus = async (
    repairData: RepairsDomainEntityBase,
    repairsService: IRepairsDomainService,
    workStatusChangedEventPublisherBase: WorkStatusChangedEventPublisherBase
): Promise<boolean> => {

    const result = await repairsService.ChangeWorkStatus(repairData);
    workStatusChangedEventPublisherBase.response = result;
    workStatusChangedEventPublisherBase.publish();

    return result;
}
