import { IsString } from 'class-validator';

import {
  IUpdateCompanyBankAccountCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class UpdateCompanyBankAccountCommand implements IUpdateCompanyBankAccountCommand {
  @IsString()
  companyId: string;

  @IsString()
  bankAccount: string;
}
