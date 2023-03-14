import {
  IBenefitedDomainEntity,
  IEmployedDomainEntity,
  IKitDomainEntity,
} from '../../entities/interfaces';

export interface ICreateOrderCommand {
  orderId?: string;
  status?: boolean;
  kit: IKitDomainEntity;
  employed: IEmployedDomainEntity;
  benefited: IBenefitedDomainEntity;
  createdAt?: number | Date;
  updatedAt?: number | Date;
  deletedAt?: number | Date;
}
