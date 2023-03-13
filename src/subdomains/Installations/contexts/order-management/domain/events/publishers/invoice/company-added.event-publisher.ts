import { EventPublisherBase } from "src/libs";

import { CompanyDomainEntityBase } from "../../../entities/invoice";

export abstract class InvoiceCompanyAddedEventPublisherBase<
  Response = CompanyDomainEntityBase
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      "order_management.invoice.company_added",
      JSON.stringify({ data: this.response })
    );
  }
}
