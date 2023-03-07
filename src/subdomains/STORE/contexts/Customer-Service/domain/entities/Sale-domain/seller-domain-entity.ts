import { IdsellerValue } from "../../value-objects/Sale/Seller/idseller-value/idseller-value";
import { NameSellerValue } from "../../value-objects/Sale/Seller/name-value";
import { ISellerEntity } from "../interfaces/Sale/seller.interface";

export class SellerDomain  implements ISellerEntity{
    IdSeller: IdsellerValue;
    Name: NameSellerValue;
   
}
