import { CheckInDomainEntity } from "../../../../entities";
import { CheckInCreatedEventPublisher } from "../../../../events";
import { ICreateCheckIn } from "../../../../interfaces";
import { ICheckInDomainService } from "../../../../services";

export const CreateCheckIn = async (
    checkIn: ICreateCheckIn,
    checkInService: ICheckInDomainService,
    checkInCreatedEventPublisher: CheckInCreatedEventPublisher
): Promise<CheckInDomainEntity | null> => {
    const result = await checkInService.createCheckIn(checkIn);
    checkInCreatedEventPublisher.response = result;
    checkInCreatedEventPublisher.publish();
    return result;
}
