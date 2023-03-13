import { IdsellerValue } from "../../value-objects/Sale/Seller/idseller-value/idseller-value";
import { NameSellerValue } from "../../value-objects/Sale/Seller/name-value";
import { ISellerEntity } from "../interfaces/Sale/seller.interface";
import { v4 as uuidv4 } from 'uuid';

export class SellerDomain  implements ISellerEntity{
    IdSeller: string |   IdsellerValue;
    Name: string |   NameSellerValue;
   

    constructor (_data?: ISellerEntity){

        if(_data.IdSeller) this.IdSeller = _data.IdSeller
        
        else this.IdSeller = uuidv4()      

        if (_data?.Name) this.Name = _data.Name;


    }
}
