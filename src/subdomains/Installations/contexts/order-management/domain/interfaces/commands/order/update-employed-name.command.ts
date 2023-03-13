import { EmployedNameValueObject } from "../../../value-objects/order";

export interface IUpdateEmployedNameCommand {
  orderId: string;
  name: EmployedNameValueObject;
}
