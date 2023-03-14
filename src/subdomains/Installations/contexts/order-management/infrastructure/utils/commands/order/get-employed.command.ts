import { IsString } from 'class-validator';

import {
  IGetEmployedCommand,
} from '../../../../domain/interfaces/commands/order';

export class GetEmployedCommand implements IGetEmployedCommand {
    @IsString()
    employedId: string;
}
  