import { IsString } from 'class-validator';

import {
  IDeleteFeeCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class DeleteFeeCommand implements IDeleteFeeCommand {
    @IsString()
    feeId: string;
}
