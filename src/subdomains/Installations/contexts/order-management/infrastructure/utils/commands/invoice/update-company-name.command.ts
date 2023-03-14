import { IsString } from 'class-validator';

import {
  IUpdateCompanyNameCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class UpdateCompanyNameCommand implements IUpdateCompanyNameCommand {
  @IsString()
  companyId: string;

  @IsString()
  name: string;
}
