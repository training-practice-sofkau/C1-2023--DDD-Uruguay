import { GuestDomainEntity } from "../../../../entities";
import { PhoneUpdatedEventPublisher } from "../../../../events";
import { IUpdatePhone } from "../../../../interfaces";
import { IGuestDomainService } from "../../../../services";

export const UpdatePhone = async (
    data: IUpdatePhone,
    guestService: IGuestDomainService,
    phoneUpdatedEventPublisher: PhoneUpdatedEventPublisher
): Promise<GuestDomainEntity | null> => {
    const result = await guestService.updatePhone(data);
    phoneUpdatedEventPublisher.response = result;
    phoneUpdatedEventPublisher.publish();
    return result;
}
