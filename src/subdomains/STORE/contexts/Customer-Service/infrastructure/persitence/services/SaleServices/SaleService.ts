import { SaleMySqlService } from './../../databases/mysql/services/ISale-Domain-Service';
import { Injectable } from "@nestjs/common";


@Injectable()
export class SaleService extends SaleMySqlService {  }