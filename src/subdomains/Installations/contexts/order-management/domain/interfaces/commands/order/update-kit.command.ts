import { KitDomainEntityBase } from '../../../entities/order';

export interface IUpdateKitCommand {
    kitId: string;
    kit?: KitDomainEntityBase;
    model: string;
}