import { CoachPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoachService extends CoachPostgreService {}