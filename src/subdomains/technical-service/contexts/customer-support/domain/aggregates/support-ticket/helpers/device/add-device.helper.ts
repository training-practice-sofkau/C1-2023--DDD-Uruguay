import { DeviceAddedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { IAddDeviceCommand } from "../../../../interfaces/commands/support-ticket";
import { IDeviceDomainService } from "../../../../services";

export const AddDevice = async (
    deviceData: IAddDeviceCommand,
    deviceService: IDeviceDomainService,
    deviceAddedEventPublisherBase: DeviceAddedEventPublisherBase
): Promise<boolean> => {

    const result = await deviceService.AddDevice(deviceData);
    deviceAddedEventPublisherBase.response = result;
    deviceAddedEventPublisherBase.publish();

    return result;
}
