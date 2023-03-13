import { ReserveDomainEntity } from "../../../../entities";
import { NumberOfGuestsUpdatedEventPublisher } from "../../../../events";
import { IUpdateNumberOfGuests } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const UpdateNumberOfGuests = async (
    data: IUpdateNumberOfGuests,
    reserveService: IReserveDomainService,
    numberOfGuestsUpdatedEventPublisher: NumberOfGuestsUpdatedEventPublisher
): Promise<ReserveDomainEntity | null> => {
    const result = await reserveService.updateNumberOfGuests(data);
    numberOfGuestsUpdatedEventPublisher.response = result.numberOfGuests.valueOf();
    numberOfGuestsUpdatedEventPublisher.publish();
    return result;
}
