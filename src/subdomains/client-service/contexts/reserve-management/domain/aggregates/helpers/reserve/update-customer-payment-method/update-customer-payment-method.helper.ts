import { CustomerPaymentMethodUpdatedEventPublisher } from "../../../../events";
import { IUpdateCustomerPaymentMethod } from "../../../../interfaces";
import { IReserveDomainService } from "../../../../services";

export const UpdateCustomerPaymentMethod = async (
    data: IUpdateCustomerPaymentMethod,
    reserveService: IReserveDomainService,
    customerPaymentMethodUpdatedEventPublisher: CustomerPaymentMethodUpdatedEventPublisher
): Promise<string | null> => {
    const result = await reserveService.updateCustomerPaymentMethod(data);
    customerPaymentMethodUpdatedEventPublisher.response = result;
    customerPaymentMethodUpdatedEventPublisher.publish();
    return result;
}
