import { EventPublisherBase } from "../../../../../../../../../libs/sofka/bases";
export abstract class DeviceAddedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.device-added',
            JSON.stringify({ data: this.response })
        )
    }
}
