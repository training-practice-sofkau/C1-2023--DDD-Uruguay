import { IsString } from 'class-validator';

import {
  ICreateKitCommand,
} from '../../../../domain/interfaces/commands/order';

export class CreateKitCommand implements ICreateKitCommand {
  @IsString()
  model: string;
}
