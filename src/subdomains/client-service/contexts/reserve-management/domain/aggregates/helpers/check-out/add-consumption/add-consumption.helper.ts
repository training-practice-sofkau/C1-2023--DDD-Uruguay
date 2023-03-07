import { ConsumptionDomainEntity } from "../../../../entities";
import { ConsumptionAddedEventPublisher } from "../../../../events";
import { IAddConsumption } from "../../../../interfaces";
import { ICheckOutDomainService } from "../../../../services";

export const AddConsumption = async (
    consumption: IAddConsumption,
    checkOutService: ICheckOutDomainService,
    consumptionAddedEventPublisher: ConsumptionAddedEventPublisher
): Promise<ConsumptionDomainEntity | null> => {
    const result = await checkOutService.addConsumption(consumption);
    consumptionAddedEventPublisher.response = result;
    consumptionAddedEventPublisher.publish();
    return result;
}
