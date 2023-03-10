import { TrainingFieldDomainEntity } from "../entities";
import { IUpdateTrainingFieldNameCommand } from "../interfaces";

export interface ITrainingFieldDomainService {
    getTrainingField(id: string): Promise<TrainingFieldDomainEntity | null>;
    updateTrainingFieldName(name: IUpdateTrainingFieldNameCommand): Promise<TrainingFieldDomainEntity | null>;
}