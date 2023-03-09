import { EventPublisherBase } from "@sofka";
import { IRoleDomainEntity } from "../../../../entities/interfaces";
export abstract class RoleCreatedEventPublisherBase < Response = IRoleDomainEntity | null > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'customer-support.role-created',
            JSON.stringify({ data: this.response })
        )
    }
}