import { SaleMySqlService } from './../../databases/mysql/services/ISale-Domain-Service';
import { Injectable } from "@nestjs/common";
import { SellerMySqlService } from '../../databases/mysql/services/ISeller-Domain-Service';


@Injectable()
export class SellerService extends SellerMySqlService {  }