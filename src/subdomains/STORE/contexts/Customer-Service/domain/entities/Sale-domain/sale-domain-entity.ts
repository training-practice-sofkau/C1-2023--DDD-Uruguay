import { IdOrdertValueObject } from "../../value-objects";
import { IdSaleValueObject } from "../../value-objects/Sale/Id-Sale-value";
import { ISaleEntity } from "../interfaces/Sale/sale.interface";
import { BillDomain } from "./bill-domain-entity";
import { SellerDomain } from "./seller-domain-entity";
import { v4 as uuidv4 } from 'uuid';

export class SaleDomainEntity implements ISaleEntity{
    Bill?: BillDomain;
    Seller?: SellerDomain;
    IDSale?: string |   IdSaleValueObject;
    IDOrder?: string |  IdOrdertValueObject;



    constructor (_data?: ISaleEntity){

        if(_data.IDSale) this.IDSale = _data.IDSale
        
        else this.IDSale = uuidv4()      

        if (_data?.Seller) this.Seller = _data.Seller;

        if (_data?.Bill) this.Bill = _data.Bill;   
        
        if (_data?.IDOrder) this.IDOrder = _data.IDOrder;

        else this.IDOrder = uuidv4()      

    }
}
