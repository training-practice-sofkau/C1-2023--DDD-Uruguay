import { IsString } from 'class-validator';

import {
  IGetCompanyCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class GetCompanyCommand implements IGetCompanyCommand {
    @IsString()
    companyId: string;
}
