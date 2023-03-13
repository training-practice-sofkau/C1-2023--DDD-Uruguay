import { GuestDomainEntity } from "../../../../entities";
import { GuestObtainedEventPublisher } from "../../../../events";
import { ICheckInDomainService } from "../../../../services";

export const GetGuest = async (
    data: string,
    checkInService: ICheckInDomainService,
    guestObtainedEventPublisher: GuestObtainedEventPublisher
): Promise<GuestDomainEntity | null> => {
    const result = await checkInService.getGuest(data);
    guestObtainedEventPublisher.response = result;
    guestObtainedEventPublisher.publish();
    return result;
}
