import { IdOrdertValueObject } from "../../value-objects";
import { IdSaleValueObject } from "../../value-objects/Sale/Id-Sale-value";
import { ISaleEntity } from "../interfaces/Sale/sale.interface";
import { BillDomain } from "./bill-domain-entity";
import { SellerDomain } from "./seller-domain-entity";

export class SaleDomainEntity implements ISaleEntity{
    Bill: BillDomain;
    Seller: SellerDomain;
    IDSale: IdSaleValueObject;
    IDOrder: IdOrdertValueObject;
}
