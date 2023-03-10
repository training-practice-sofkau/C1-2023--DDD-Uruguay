import { FeeDomainEntityBase } from '../../../entities/invoice';

export interface IUpdateFeeCommand {
    feeId: string;
    fee?: FeeDomainEntityBase;
    tax: number;
    charge: number;
}