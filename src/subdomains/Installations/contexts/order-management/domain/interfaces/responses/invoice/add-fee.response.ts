import { FeeDomainEntityBase } from '../../../entities/invoice';

export interface IcreateFeeResponse {
  success: boolean;
  data: FeeDomainEntityBase | null;
}
