import { IdsellerValue } from "../../../value-objects/Sale/Seller/idseller-value/idseller-value";
import { NameSellerValue } from "../../../value-objects/Sale/Seller/name-value";

export interface ISellerEntity {

IdSeller: string | IdsellerValue
Name:  string | NameSellerValue

}
