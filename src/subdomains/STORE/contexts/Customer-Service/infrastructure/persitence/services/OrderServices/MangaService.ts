import { Injectable } from "@nestjs/common";
import { MangaMySqlService } from "../../databases/mysql/services/IManga-Domain-Service";


@Injectable()
export class MangaService extends MangaMySqlService {  }