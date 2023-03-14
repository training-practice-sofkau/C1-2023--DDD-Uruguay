import { EventPublisherBase } from 'src/libs';

import { InvoiceDomainEntityBase } from '../../entities';

export abstract class CreatedInvoiceEventPublisherBase<
  Response = InvoiceDomainEntityBase
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      "order_management.created-invoice",
      JSON.stringify({ data: this.response })
    );
  }
}
