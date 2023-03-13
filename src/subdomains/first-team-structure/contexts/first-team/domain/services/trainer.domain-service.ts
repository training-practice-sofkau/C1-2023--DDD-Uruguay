import { TrainerDomainEntity } from '../entities/training/trainer.domain-entity';
import { IUpdateTrainerSpecialtyCommand } from "../interfaces";

export interface ITrainerDomainService {
    getTrainer(id: string): Promise<TrainerDomainEntity | null>;
    updateTrainerSpecialty(specialty: IUpdateTrainerSpecialtyCommand): Promise<TrainerDomainEntity | null>;
}