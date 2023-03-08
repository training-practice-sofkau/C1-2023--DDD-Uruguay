import { EventPublisherBase } from "src/libs";
import { CompanyDomainEntityBase } from "../../../entities/invoice";


export abstract class InvoiceCompanyUpdatedEventPublisherBase<
    Response = CompanyDomainEntityBase
> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit(
            'management_system.invoice.company_updated',
            JSON.stringify({ data: this.response })
        )
    }
}