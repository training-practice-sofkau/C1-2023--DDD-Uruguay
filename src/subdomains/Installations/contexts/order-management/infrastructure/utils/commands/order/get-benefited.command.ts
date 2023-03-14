import { IsString } from 'class-validator';

import {
  IGetBenefitedCommand,
} from '../../../../domain/interfaces/commands/order';

export class GetBenefitedCommand implements IGetBenefitedCommand {
    @IsString()
    benefitedId: string;
}
  