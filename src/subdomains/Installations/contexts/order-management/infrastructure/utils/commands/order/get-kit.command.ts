import { IsString } from 'class-validator';

import { IGetKitCommand } from '../../../../domain/interfaces/commands/order';

export class GetKitCommand implements IGetKitCommand {
    @IsString()
    kitId: string;
}
  