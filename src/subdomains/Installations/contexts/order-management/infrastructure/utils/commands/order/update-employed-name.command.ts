import { IsString } from 'class-validator';

import {
  IUpdateEmployedNameCommand,
} from '../../../../domain/interfaces/commands/order';

export class UpdateEmployedNameCommand implements IUpdateEmployedNameCommand {
  @IsString()
  employedId: string;

  @IsString()
  name: string;
}
