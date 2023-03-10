import { GuestDomainEntity } from "../../../../entities";
import { EmailUpdatedEventPublisher } from "../../../../events";
import { IUpdateEmail } from "../../../../interfaces";
import { IGuestDomainService } from "../../../../services";

export const UpdateEmail = async (
    data: IUpdateEmail,
    guestService: IGuestDomainService,
    emailUpdatedEventPublisher: EmailUpdatedEventPublisher
): Promise<GuestDomainEntity | null> => {
    const result = await guestService.updateEmail(data);
    emailUpdatedEventPublisher.response = result;
    emailUpdatedEventPublisher.publish();
    return result;
}
