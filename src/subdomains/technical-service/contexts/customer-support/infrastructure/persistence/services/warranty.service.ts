import { Injectable } from '@nestjs/common/';
import { WarrantyMySqlService } from '../databases';

@Injectable()
export class WarrantyService extends WarrantyMySqlService {}