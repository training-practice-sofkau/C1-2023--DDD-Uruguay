import { NumberOfGuestsUpdatedEventPublisher } from "../../../../events";
import { IUpdateNumberOfGuests } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const UpdateNumberOfGuests = async (
    data: IUpdateNumberOfGuests,
    reserveService: IReserveDomainService,
    numberOfGuestsUpdatedEventPublisher: NumberOfGuestsUpdatedEventPublisher
): Promise<number | null> => {
    const result = await reserveService.updateNumberOfGuests(data);
    numberOfGuestsUpdatedEventPublisher.response = result;
    numberOfGuestsUpdatedEventPublisher.publish();
    return result;
}
