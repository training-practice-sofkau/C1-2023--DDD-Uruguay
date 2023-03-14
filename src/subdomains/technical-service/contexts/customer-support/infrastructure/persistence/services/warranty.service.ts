import { Injectable } from '@nestjs/common/';
import { WarrantyMySqlService } from '../databases/mysql';


@Injectable()
export class WarrantyService extends WarrantyMySqlService {}