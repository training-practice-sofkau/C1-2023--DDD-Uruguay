import { CoachDomainEntity } from "../entities";
import { IUpdateCoachWageCommand } from "../interfaces/commands/team/update-coach-wage.command";
import { WageValueObject } from "../value-objects";

export interface ICoachDomainService {
    updateWage(command: IUpdateCoachWageCommand): Promise<CoachDomainEntity | null>;
}