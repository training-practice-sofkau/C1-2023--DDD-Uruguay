import { Injectable } from '@nestjs/common';
import { TrainingEquipmentPostgreService } from '../../databases';
@Injectable()
export class TrainingEquipmentService extends TrainingEquipmentPostgreService {}