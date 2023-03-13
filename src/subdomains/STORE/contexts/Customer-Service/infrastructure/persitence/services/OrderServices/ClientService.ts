import { Injectable } from "@nestjs/common";
import { ClientMySqlService } from "../../databases/mysql";


@Injectable()
export class ClientService extends ClientMySqlService {  }

