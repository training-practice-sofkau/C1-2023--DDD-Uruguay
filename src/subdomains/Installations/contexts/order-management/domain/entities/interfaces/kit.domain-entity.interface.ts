import { KitIdValueObject, KitModelValueObject } from '../../value-objects/order';

export interface IKitDomainEntity {
    kitId?: string | KitIdValueObject;
    model?: string | KitModelValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}