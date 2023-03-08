import { ConsumptionMiniBarUpdatedEventPublisher } from "../../../../events";
import { IUpdateConsumptionMiniBar } from "../../../../interfaces";
import { ICheckOutDomainService } from "../../../../services";

export const UpdateConsumptionMiniBar = async (
    data: IUpdateConsumptionMiniBar,
    checkOutService: ICheckOutDomainService,
    consumptionMiniBarUpdatedEventPublisher: ConsumptionMiniBarUpdatedEventPublisher
): Promise<number | null> => {
    const result = await checkOutService.updateConsumptionMiniBar(data);
    consumptionMiniBarUpdatedEventPublisher.response = result;
    consumptionMiniBarUpdatedEventPublisher.publish();
    return result;
}
