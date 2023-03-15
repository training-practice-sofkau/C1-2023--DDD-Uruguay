import { Injectable } from "@nestjs/common";
import { PosterMySqlService } from '../databases/mysql/services/poster.service';

@Injectable()
export class PosterService extends PosterMySqlService { }