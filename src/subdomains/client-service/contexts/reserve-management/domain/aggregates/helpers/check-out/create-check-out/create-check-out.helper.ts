import { CheckOutDomainEntity } from "../../../../entities";
import { CheckOutCreatedEventPublisher } from "../../../../events";
import { ICreateCheckOut } from "../../../../interfaces";
import { ICheckOutDomainService } from "../../../../services";

export const CreateCheckOut = async (
    checkOut: ICreateCheckOut,
    checkOutService: ICheckOutDomainService,
    checkOutCreatedEventPublisher: CheckOutCreatedEventPublisher
): Promise<CheckOutDomainEntity | null> => {
    const result = await checkOutService.createCheckOut(checkOut);
    checkOutCreatedEventPublisher.response = result;
    checkOutCreatedEventPublisher.publish();
    return result;
}
