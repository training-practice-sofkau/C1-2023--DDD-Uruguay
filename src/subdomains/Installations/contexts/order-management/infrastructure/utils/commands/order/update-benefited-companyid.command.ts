import { IsString } from 'class-validator';

import {
  IUpdateBenefitedCompanyIdCommand,
} from '../../../../domain/interfaces/commands/order';

export class UpdateBenefitedCompanyIdCommand implements IUpdateBenefitedCompanyIdCommand {
  @IsString()
  benefitedId: string;

  @IsString()
  companyId: string;
}
