import { IsString } from 'class-validator';

import {
  IDeleteEmployedCommand,
} from '../../../../domain/interfaces/commands/order';

export class DeleteEmployedCommand implements IDeleteEmployedCommand {
    @IsString()
    employedId: string;
}
  