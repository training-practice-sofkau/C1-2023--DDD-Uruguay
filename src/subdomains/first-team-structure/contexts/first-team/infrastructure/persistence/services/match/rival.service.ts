import { RivalPostgreService } from "../../databases"
import { Injectable } from '@nestjs/common';

@Injectable()
export class RivalService extends RivalPostgreService {}