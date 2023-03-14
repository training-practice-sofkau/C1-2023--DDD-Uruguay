import { StadiumPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class StadiumService extends StadiumPostgreService {}