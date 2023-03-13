import { IDeviceDomainEntity } from "../../../../entities/interfaces";
import { DeviceDomainEntityBase } from "../../../../entities/support-ticket/device.domain-entity/device.domain-entity";
import { DeviceAddedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { IDeviceDomainService } from "../../../../services";

export const AddDevice = async (
    deviceData: DeviceDomainEntityBase,
    deviceService: IDeviceDomainService,
    deviceAddedEventPublisherBase: DeviceAddedEventPublisherBase
): Promise<IDeviceDomainEntity | null> => {

    const result = await deviceService.AddDevice(deviceData);
    deviceAddedEventPublisherBase.response = result;
    deviceAddedEventPublisherBase.publish();

    return result;
}
