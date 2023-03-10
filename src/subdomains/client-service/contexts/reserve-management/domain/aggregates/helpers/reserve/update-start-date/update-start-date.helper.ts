import { ReserveDomainEntity } from "../../../../entities";
import { StartDateUpdatedEventPublisher } from "../../../../events";
import { IUpdateStartDate } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const UpdateStartDate = async (
    data: IUpdateStartDate,
    reserveService: IReserveDomainService,
    startDateUpdatedEventPublisher: StartDateUpdatedEventPublisher
): Promise<ReserveDomainEntity | null> => {
    const result = await reserveService.updateStartDate(data);
    startDateUpdatedEventPublisher.response = result;
    startDateUpdatedEventPublisher.publish();
    return result;
}
