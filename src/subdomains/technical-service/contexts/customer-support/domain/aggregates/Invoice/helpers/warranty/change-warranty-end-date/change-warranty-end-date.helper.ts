import { WarrantyDomainEntityBase } from "../../../../../entities/invoice";
import { IWarrantyDomainService } from "../../../../../services";
import { WarrantyEndDateChangedEventPublisherBase } from '../../../../../events/publishers/invoice/warranty/warranty-end-date-changed.event-publisher';

export const ChangeWarrantyEndDate = async (
    data: WarrantyDomainEntityBase,
    warrantyService: IWarrantyDomainService,
    warrantyEndDateChangedEventPublisherBase: WarrantyEndDateChangedEventPublisherBase
): Promise<boolean> => {

    const result = await warrantyService.ChangeWarrantyEndDate(data);
    warrantyEndDateChangedEventPublisherBase.response = result;
    warrantyEndDateChangedEventPublisherBase.publish();

    return result;
}
