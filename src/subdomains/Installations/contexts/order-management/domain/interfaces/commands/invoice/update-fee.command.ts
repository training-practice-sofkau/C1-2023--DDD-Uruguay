import { FeeDomainEntityBase } from '../../../entities/invoice';

export interface IUpdateFee {
    feeId: string;
    fee?: FeeDomainEntityBase;
    tax: number;
    charge: number;
}