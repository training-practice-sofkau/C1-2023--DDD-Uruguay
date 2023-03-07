import { GuestEmailUpdatedEventPublisher } from "../../../../events";
import { IUpdateGuestEmail } from "../../../../interfaces";
import { ICheckInDomainService } from "../../../../services";

export const UdateGuestEmail = async (
    data: IUpdateGuestEmail,
    checkInService: ICheckInDomainService,
    guestEmailUpdatedEventPublisher: GuestEmailUpdatedEventPublisher
): Promise<string | null> => {
    const result = await checkInService.udateGuestEmail(data);
    guestEmailUpdatedEventPublisher.response = result;
    guestEmailUpdatedEventPublisher.publish();
    return result;
}
