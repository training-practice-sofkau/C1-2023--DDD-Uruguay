import { IsString } from 'class-validator';

import {
  IUpdateEmployedPhoneCommand,
} from '../../../../domain/interfaces/commands/order';

export class UpdateEmployedPhoneCommand implements IUpdateEmployedPhoneCommand {
  @IsString()
  employedId: string;
  
  @IsString()
  phone: string;
}
