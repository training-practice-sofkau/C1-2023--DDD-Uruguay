import { KitModelValueObject } from '../../../value-objects/order';

export interface IUpdateKitModelCommand {
    orderId: string;
    model: KitModelValueObject;
}