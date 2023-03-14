import { IsString } from 'class-validator';

import {
  IUpdateBenefitedNameCommand,
} from '../../../../domain/interfaces/commands/order';

export class UpdateBenefitedNameCommand implements IUpdateBenefitedNameCommand {
  @IsString()
  benefitedId: string;

  @IsString()
  name: string;
}
