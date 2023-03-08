import { RoomKeyAccessLevelUpdatedEventPublisher } from "../../../../events";
import { IUpdatePhone } from "../../../../interfaces";
import { IGuestDomainService } from "../../../../services";

export const UpdatePhone = async (
    data: IUpdatePhone,
    guestService: IGuestDomainService,
    roomKeyAccessLevelUpdatedEventPublisher: RoomKeyAccessLevelUpdatedEventPublisher
): Promise<string | null> => {
    const result = await guestService.updatePhone(data);
    roomKeyAccessLevelUpdatedEventPublisher.response = result;
    roomKeyAccessLevelUpdatedEventPublisher.publish();
    return result;
}
