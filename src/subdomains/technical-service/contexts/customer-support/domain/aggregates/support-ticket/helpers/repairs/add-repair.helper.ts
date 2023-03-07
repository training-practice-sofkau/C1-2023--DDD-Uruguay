import {  RepairsAddedEventPublisherBase } from "../../../../events/publishers/";
import {  IRepairsDomainService } from "../../../../services";
import {  IAddRepairsCommand } from '../../../../interfaces/';

export const AddRepair = async (
    repairData: IAddRepairsCommand,
    repairsService: IRepairsDomainService,
    issueAddedEventPublisherBase: RepairsAddedEventPublisherBase
): Promise<boolean> => {

    const result = await repairsService.AddRepair(repairData);
    issueAddedEventPublisherBase.response = result;
    issueAddedEventPublisherBase.publish();

    return result;
}
