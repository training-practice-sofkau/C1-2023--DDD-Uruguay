import { IsString } from 'class-validator';

import {
  IUpdateBenefitedPhoneCommand,
} from '../../../../domain/interfaces/commands/order';

export class UpdateBenefitedPhoneCommand implements IUpdateBenefitedPhoneCommand {
  @IsString()
  benefitedId: string;

  @IsString()
  phone: string;
}
