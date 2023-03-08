import { ConsumptionExtraUpdatedEventPublisher } from "../../../../events";
import { IUpdateConsumptionExtra } from "../../../../interfaces";
import { ICheckOutDomainService } from "../../../../services";

export const UpdateConsumptionExtra = async (
    data: IUpdateConsumptionExtra,
    checkOutService: ICheckOutDomainService,
    consumptionExtraUpdatedEventPublisher: ConsumptionExtraUpdatedEventPublisher
): Promise<number | null> => {
    const result = await checkOutService.updateConsumptionExtra(data);
    consumptionExtraUpdatedEventPublisher.response = result;
    consumptionExtraUpdatedEventPublisher.publish();
    return result;
}
