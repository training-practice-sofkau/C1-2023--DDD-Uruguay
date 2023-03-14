import { MatchPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchService extends MatchPostgreService {}