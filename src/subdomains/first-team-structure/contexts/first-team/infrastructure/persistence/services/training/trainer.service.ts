import { TrainerPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class TrainerService extends TrainerPostgreService {}