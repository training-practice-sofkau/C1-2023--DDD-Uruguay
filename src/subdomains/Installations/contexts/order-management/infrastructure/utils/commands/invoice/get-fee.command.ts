import { IsString } from 'class-validator';

import { IGetFeeCommand } from '../../../../domain/interfaces/commands/invoice';

export class GetFeeCommand implements IGetFeeCommand {
    @IsString()
    feeId: string;
}
