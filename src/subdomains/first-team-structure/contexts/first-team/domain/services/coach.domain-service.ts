import { CoachDomainEntity } from "../entities";
import { IUpdateCoachWageCommand } from "../interfaces/commands/team/update-coach-wage.command";

export interface ICoachDomainService {
    getCoach(id: string): Promise<CoachDomainEntity | null>;
    updateCoachWage(command: IUpdateCoachWageCommand): Promise<CoachDomainEntity | null>;
}