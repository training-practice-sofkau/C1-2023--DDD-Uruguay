import { IsString } from 'class-validator';

import {
  IDeleteCompanyCommand,
} from '../../../../domain/interfaces/commands/invoice';

export class DeleteCompanyCommand implements IDeleteCompanyCommand {
    @IsString()
    companyId: string;
}
