import { EventPublisherBase } from "src/libs";
import { WarrantyDomainEntityBase } from "../../../entities/invoice/warranty.domain-entity/warranty.domain-entity";

export abstract class ItemCoveredAddedEventPublisherBase < Response = WarrantyDomainEntityBase > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'ItemCoveredAddedEventPublisherBase:',
            JSON.stringify({ data: this.response })
        )
    }
}
