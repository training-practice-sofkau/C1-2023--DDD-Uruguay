import { IsString } from 'class-validator';

import {
  IUpdateBenefitedAddressCommand,
} from '../../../../domain/interfaces/commands/order';

export class UpdateBenefitedAddressCommand implements IUpdateBenefitedAddressCommand {
  @IsString()
  benefitedId: string;

  @IsString()
  address: string;
}
