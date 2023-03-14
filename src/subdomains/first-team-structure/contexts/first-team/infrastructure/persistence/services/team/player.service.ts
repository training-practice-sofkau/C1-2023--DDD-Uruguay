import { PlayerPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService extends PlayerPostgreService {}