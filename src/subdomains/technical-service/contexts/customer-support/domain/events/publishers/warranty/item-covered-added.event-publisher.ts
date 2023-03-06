import { EventPublisherBase } from "src/libs";
import { WarrantyDomainEntityBase } from "../../../entities/invoice/warranty.domain-entity/warranty.domain-entity";

export abstract class ItemCoveredAddedEventPublisherBase extends EventPublisherBase<WarrantyDomainEntityBase>{

    publish(): void {
        console.log('ItemCoveredAddedEventPublisherBase: Method not implemented');
    }
}