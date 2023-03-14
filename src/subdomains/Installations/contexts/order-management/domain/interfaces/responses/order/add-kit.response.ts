import { KitDomainEntityBase } from '../../../entities/order';

export interface IcreateKitResponse {
  success: boolean;
  data: KitDomainEntityBase | null;
}
