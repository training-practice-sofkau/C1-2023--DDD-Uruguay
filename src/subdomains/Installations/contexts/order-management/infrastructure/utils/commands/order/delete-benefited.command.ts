import { IsString } from 'class-validator';

import {
  IDeleteBenefitedCommand,
} from '../../../../domain/interfaces/commands/order';

export class DeleteBenefitedCommand implements IDeleteBenefitedCommand {
    @IsString()
    benefitedId: string;
}
