import { TrainingPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainingService extends TrainingPostgreService {}