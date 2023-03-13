import { ConsumptionDomainEntity } from "../../../../entities";
import { ExtraUpdatedEventPublisher } from "../../../../events";
import { IUpdateExtra } from "../../../../interfaces";
import { IConsumptionDomainService } from "../../../../services";

export const UpdateExtra = async (
    data: IUpdateExtra,
    consumptionService: IConsumptionDomainService,
    extraUpdatedEventPublisher: ExtraUpdatedEventPublisher
): Promise<ConsumptionDomainEntity | null> => {
    const result = await consumptionService.updateExtra(data);
    extraUpdatedEventPublisher.response = result;
    extraUpdatedEventPublisher.publish();
    return result;
}
