import { v4 as uuidv4 } from "uuid";

import {
  KitIdValueObject,
  KitModelValueObject,
} from "../../value-objects/order";
import { IKitDomainEntity } from "../interfaces";

export class KitDomainEntityBase implements IKitDomainEntity {
  kitId?: string | KitIdValueObject;
  model?: string | KitModelValueObject;
  createdAt?: number | Date;
  updatedAt?: number | Date;
  deletedAt?: number | Date;

  constructor(_data?: IKitDomainEntity) {
    if (_data?.kitId) this.kitId = _data.kitId;
    else this.kitId = uuidv4();

    if (_data?.model) this.model = _data.model;

    this.createdAt = new Date();
  }
}
