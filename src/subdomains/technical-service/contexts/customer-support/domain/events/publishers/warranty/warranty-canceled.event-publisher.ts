import { EventPublisherBase } from "src/libs";
import { WarrantyDomainEntityBase } from "../../../entities/invoice/warranty.domain-entity/warranty.domain-entity";

export abstract class WarrantyCanceledEventPublisherBase < Response = WarrantyDomainEntityBase > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'WarrantyCanceledEventPublisherBase:',
            JSON.stringify({ data: this.response })
        )
    }
}
