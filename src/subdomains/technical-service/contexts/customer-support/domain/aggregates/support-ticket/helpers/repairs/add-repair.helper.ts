import {  RepairsAddedEventPublisherBase } from "../../../../events/publishers/";
import {  IRepairsDomainService } from "../../../../services";
import { RepairsDomainEntityBase } from "../../../../entities/support-ticket";

export const AddRepair = async (
    repairData: RepairsDomainEntityBase,
    repairsService: IRepairsDomainService,
    issueAddedEventPublisherBase: RepairsAddedEventPublisherBase
): Promise<boolean> => {

    const result = await repairsService.AddRepair(repairData);
    issueAddedEventPublisherBase.response = result;
    issueAddedEventPublisherBase.publish();

    return result;
}
