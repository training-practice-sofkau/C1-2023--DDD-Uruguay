import { IsString } from 'class-validator';

import {
  ICreateEmployedCommand,
} from '../../../../domain/interfaces/commands/order';

export class CreateEmployedCommand implements ICreateEmployedCommand {
  @IsString()
  name: string;
  
  @IsString()
  phone: string;
}
