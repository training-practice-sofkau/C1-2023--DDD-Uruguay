import { CustomerDomainEntity } from "../../../../entities";
import { CustomerObtainedEventPublisher } from "../../../../events";
import { IReserveDomainService } from "../../../../services";

export const GetCustomer = async (
    data: string,
    reserveService: IReserveDomainService,
    customerObtainedEventPublisher: CustomerObtainedEventPublisher
): Promise<CustomerDomainEntity | null> => {
    const result = await reserveService.getCustomer(data);
    customerObtainedEventPublisher.response = result;
    customerObtainedEventPublisher.publish();
    return result;
}
