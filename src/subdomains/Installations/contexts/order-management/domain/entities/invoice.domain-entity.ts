import { v4 as uuidv4 } from "uuid";

import {
  InvoiceIdValueObject,
  InvoiceStatusValueObject,
} from "../value-objects/invoice";
import { IInvoiceDomainEntity } from "./interfaces";
import { CompanyDomainEntityBase, FeeDomainEntityBase } from "./invoice";

export class InvoiceDomainEntityBase implements IInvoiceDomainEntity {
  invoiceId?: string | InvoiceIdValueObject;
  status?: boolean | InvoiceStatusValueObject;
  company: CompanyDomainEntityBase;
  fee: FeeDomainEntityBase;
  createdAt?: number | Date;
  updatedAt?: number | Date;
  deletedAt?: number | Date;

  constructor(_data?: IInvoiceDomainEntity) {
    if (_data?.invoiceId) this.invoiceId = _data.invoiceId;
    else this.invoiceId = uuidv4();

    if (_data?.status) this.status = _data.status;

    if (_data?.company) this.company = _data.company;

    if (_data?.fee) this.fee = _data.fee;

    this.createdAt = new Date();
  }
}
