import { GuestDomainEntity } from "../../../../entities";
import { GuestAddedEventPublisher } from "../../../../events";
import { IAddGuest } from "../../../../interfaces";
import { ICheckInDomainService } from "../../../../services";

export const AddGuest = async (
    guest: IAddGuest,
    checkInService: ICheckInDomainService,
    guestAddedEventPublisher: GuestAddedEventPublisher
): Promise<GuestDomainEntity | null> => {
    const result = await checkInService.addGuest(guest);
    guestAddedEventPublisher.response = result;
    guestAddedEventPublisher.publish();
    return result;
}
