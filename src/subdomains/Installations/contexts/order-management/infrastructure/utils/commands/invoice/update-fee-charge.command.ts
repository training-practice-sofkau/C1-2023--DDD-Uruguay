import { IsString } from 'class-validator';

import {
  IUpdateFeeChargeCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class UpdateFeeChargeCommand implements IUpdateFeeChargeCommand {
  @IsString()
  feeId: string;

  @IsString()
  charge: string;
}
