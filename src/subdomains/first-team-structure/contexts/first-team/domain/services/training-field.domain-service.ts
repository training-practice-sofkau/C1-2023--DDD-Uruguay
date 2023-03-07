import { TrainingFieldDomainEntity } from "../entities";
import { IUpdateTrainingFieldNameCommand } from "../interfaces";
import { NameValueObject } from "../value-objects";

export interface ITrainingFieldDomainService {
    updateName(name: IUpdateTrainingFieldNameCommand): Promise<TrainingFieldDomainEntity | null>;
}