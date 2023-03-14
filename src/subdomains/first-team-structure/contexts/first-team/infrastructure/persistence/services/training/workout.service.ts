import { WorkoutPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutService extends WorkoutPostgreService {}