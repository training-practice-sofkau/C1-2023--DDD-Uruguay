import { MiniBarUpdatedEventPublisher } from "../../../../events";
import { IUpdateMiniBar } from "../../../../interfaces";
import { IConsumptionDomainService } from "../../../../services";

export const UpdateMiniBar = async (
    data: IUpdateMiniBar,
    consumptionService: IConsumptionDomainService,
    miniBarUpdatedEventPublisher: MiniBarUpdatedEventPublisher
): Promise<number | null> => {
    const result = await consumptionService.updateMiniBar(data);
    miniBarUpdatedEventPublisher.response = result;
    miniBarUpdatedEventPublisher.publish();
    return result;
}
