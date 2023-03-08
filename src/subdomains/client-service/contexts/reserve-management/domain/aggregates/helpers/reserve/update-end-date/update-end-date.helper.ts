import { EndDateUpdatedEventPublisher } from "../../../../events";
import { IUpdateEndDate } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const UpdateEndDate = async (
    data: IUpdateEndDate,
    reserveService: IReserveDomainService,
    endDateUpdatedEventPublisher: EndDateUpdatedEventPublisher
): Promise<Date | null> => {
    const result = await reserveService.updateEndDate(data);
    endDateUpdatedEventPublisher.response = result;
    endDateUpdatedEventPublisher.publish();
    return result;
}
