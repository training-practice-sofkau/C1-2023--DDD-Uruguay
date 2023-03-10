import { EventPublisherBase } from "@sofka";
import { IDeviceDomainEntity } from "../../../../entities/interfaces";
export abstract class DeviceAddedEventPublisherBase < Response = IDeviceDomainEntity | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.device-added',
            JSON.stringify({ data: this.response })
        )
    }
}
