import { IsString } from 'class-validator';

import {
  ICreateBenefitedCommand,
} from '../../../../domain/interfaces/commands/order';

export class CreateBenefitedCommand implements ICreateBenefitedCommand {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  companyId: string;
}
