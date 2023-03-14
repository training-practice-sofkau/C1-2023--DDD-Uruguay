import { IsString } from 'class-validator';

import {
  IDeleteKitCommand,
} from '../../../../domain/interfaces/commands/order';

export class DeleteKitCommand implements IDeleteKitCommand {
    @IsString()
    kitId: string;
}
  