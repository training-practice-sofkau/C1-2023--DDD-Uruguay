import { IsNumber } from 'class-validator';

import {
  ICreateFeeCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class CreateFeeCommand implements ICreateFeeCommand {
  @IsNumber()
  tax: number;

  @IsNumber()
  charge: number;
}
