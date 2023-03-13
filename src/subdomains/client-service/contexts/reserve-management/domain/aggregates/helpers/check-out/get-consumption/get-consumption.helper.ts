import { ConsumptionDomainEntity } from "../../../../entities";
import { ConsumptionObtainedEventPublisher } from "../../../../events";
import { ICheckOutDomainService } from "../../../../services";

export const GetConsumption = async (
    data: string,
    checkOutService: ICheckOutDomainService,
    consumptionObtainedEventPublisher: ConsumptionObtainedEventPublisher
): Promise<ConsumptionDomainEntity | null> => {
    const result = await checkOutService.getConsumption(data);
    consumptionObtainedEventPublisher.response = result;
    consumptionObtainedEventPublisher.publish();
    return result;
}
