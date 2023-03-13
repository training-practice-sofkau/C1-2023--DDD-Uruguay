
import { WarrantyDomainEntityBase } from '../../../../../entities/invoice/warranty.domain-entity';
import { WarrantyStatusChangedEventPublisherBase } from '../../../../../events';
import { IWarrantyDomainService } from '../../../../../services';


export const ChangeWarrantyStatus = async (
    data: WarrantyDomainEntityBase,
    warrantyService: IWarrantyDomainService,
    warrantyStatusChangedEventPublisherBase: WarrantyStatusChangedEventPublisherBase
): Promise<boolean> => {

    const result = await warrantyService.ChangeWarrantyStatus(data);
    warrantyStatusChangedEventPublisherBase.response = result;
    warrantyStatusChangedEventPublisherBase.publish();

    return result;
}
