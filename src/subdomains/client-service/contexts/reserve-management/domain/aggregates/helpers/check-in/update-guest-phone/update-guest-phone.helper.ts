import { GuestPhoneUpdatedEventPublisher } from "../../../../events";
import { IUpdateGuestPhone } from "../../../../interfaces";
import { ICheckInDomainService } from "../../../../services";

export const UpdateGuestPhone = async (
    data: IUpdateGuestPhone,
    checkInService: ICheckInDomainService,
    guestPhoneUpdatedEventPublisher: GuestPhoneUpdatedEventPublisher
): Promise<string | null> => {
    const result = await checkInService.updateGuestPhone(data);
    guestPhoneUpdatedEventPublisher.response = result;
    guestPhoneUpdatedEventPublisher.publish();
    return result;
}
