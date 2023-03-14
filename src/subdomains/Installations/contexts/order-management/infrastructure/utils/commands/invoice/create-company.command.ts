import { IsString } from 'class-validator';

import {
  ICreateCompanyCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class CreateCompanyCommand implements ICreateCompanyCommand {
  @IsString()
  name: string;

  @IsString()
  bankAccount: string;
}
