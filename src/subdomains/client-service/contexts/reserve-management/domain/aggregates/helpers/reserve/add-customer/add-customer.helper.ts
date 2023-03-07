import { CustomerDomainEntity } from "../../../../entities";
import { CustomerAddedEventPublisher } from "../../../../events";
import { IAddCustomer } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const AddCustomer = async (
    customer: IAddCustomer,
    reserveService: IReserveDomainService,
    customerAddedEventPublisher: CustomerAddedEventPublisher
): Promise<CustomerDomainEntity | null> => {
    const result = await reserveService.addCustomer(customer);
    customerAddedEventPublisher.response = result;
    customerAddedEventPublisher.publish();
    return result;
}
