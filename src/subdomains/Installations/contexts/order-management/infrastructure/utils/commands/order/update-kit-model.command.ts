import { IsString } from 'class-validator';

import {
  IUpdateKitModelCommand,
} from '../../../../domain/interfaces/commands/order';

export class UpdateKitModelCommand implements IUpdateKitModelCommand {
  @IsString()
  kitId: string;

  @IsString()
  model: string;
}
