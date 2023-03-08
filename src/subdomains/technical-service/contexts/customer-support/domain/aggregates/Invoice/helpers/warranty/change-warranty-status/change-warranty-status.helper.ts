import { IWarrantyDomainService } from '../../../../services';
import { IChangeWarrantyStatusCommand } from '../../../../interfaces/commands/invoice/warranty';
import { WarrantyStatusChangedEventPublisherBase } from '../../../../events/publishers/warranty';


export const ChangeWarrantyStatus = async (
    data: IChangeWarrantyStatusCommand,
    warrantyService: IWarrantyDomainService,
    warrantyStatusChangedEventPublisherBase: WarrantyStatusChangedEventPublisherBase
): Promise<boolean> => {

    const result = await warrantyService.ChangeWarrantyStatus(data);
    warrantyStatusChangedEventPublisherBase.response = result;
    warrantyStatusChangedEventPublisherBase.publish();

    return result;
}
