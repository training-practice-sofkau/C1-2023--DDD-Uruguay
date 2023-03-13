import { Injectable } from "@nestjs/common";
import { BillMySqlService } from '../../databases/mysql/services/IBill-Domain-Service';


@Injectable()
export class BillService extends BillMySqlService {  }