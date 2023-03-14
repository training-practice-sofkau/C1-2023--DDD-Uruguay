import { IsString } from 'class-validator';

import {
  IUpdateFeeTaxCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class UpdateFeeTaxCommand implements IUpdateFeeTaxCommand {
  @IsString()
  feeId: string;

  @IsString()
  tax: string;
}
