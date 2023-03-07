import { KitDomainEntityBase } from '../../../entities/order';

export interface IUpdateKit {
    kitId: string;
    kit?: KitDomainEntityBase;
    model: string;
}