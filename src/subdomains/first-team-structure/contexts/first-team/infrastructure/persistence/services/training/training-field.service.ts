import { TrainingFieldPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainingFieldService extends TrainingFieldPostgreService {}