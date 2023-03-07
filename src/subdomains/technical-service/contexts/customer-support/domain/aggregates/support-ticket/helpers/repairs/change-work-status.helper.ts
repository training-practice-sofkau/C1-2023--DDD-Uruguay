import {  WorkStatusChangedEventPublisherBase } from "../../../../events/publishers";
import {  IRepairsDomainService } from "../../../../services";
import {  IChangeWorkStatusCommand } from '../../../../interfaces';

export const ChangeWorkStatus = async (
    repairData: IChangeWorkStatusCommand,
    repairsService: IRepairsDomainService,
    workStatusChangedEventPublisherBase: WorkStatusChangedEventPublisherBase
): Promise<boolean> => {

    const result = await repairsService.ChangeWorkStatus(repairData);
    workStatusChangedEventPublisherBase.response = result;
    workStatusChangedEventPublisherBase.publish();

    return result;
}
