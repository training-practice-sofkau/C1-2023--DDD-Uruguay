import { TrainingDomainEntity } from '../../../entities/training.domain-entity';
export interface IGotTrainingResponse {
    success: boolean;
    data: TrainingDomainEntity | null;
}