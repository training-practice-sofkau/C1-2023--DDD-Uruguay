import { TrainerDomainEntity } from '../entities/training/trainer.domain-entity';
import { IUpdateTrainerSpecialtyCommand } from "../interfaces";

export interface ITrainerDomainService {
    updateSpecialty(specialty: IUpdateTrainerSpecialtyCommand): Promise<TrainerDomainEntity | null>;
}