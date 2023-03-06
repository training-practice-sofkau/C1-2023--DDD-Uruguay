import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
import { InvoiceDomainEntityBase } from "../../../entities/invoice.domain-entity";

export abstract class InvoiceCreatedEventPublisherBase < Response = boolean > extends EventPublisherBase<Response>{

    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'InvoiceCreatedEventPublisherBase',
            JSON.stringify({ data: this.response })
        )
    }
}
