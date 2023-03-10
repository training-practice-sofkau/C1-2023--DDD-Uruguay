import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { ClienteDomainEntity } from "../../../../entities";


export abstract class UpdatePhoneEventPublisher<Response = ClienteDomainEntity > extends EventPublisherBase<Response> {

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'web-context.update-phone',
            JSON.stringify({ data: this.response })
        )
    }

}


